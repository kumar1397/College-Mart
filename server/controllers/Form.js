const mongoose = require('mongoose');
const Product = require("../models/Product");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();
const User = require('../models/User');

function isFileSupported(type, supportedTypes) {
  return supportedTypes.includes(type);
}

async function uploadtoCloudinary(fileBuffer, folder, quality) {
  console.log("In uploadCloudinary!!");
  try {
    const options = {
      folder,
      resource_type: "auto",
      quality: quality || "auto",  // Set default quality if not provided
    };

    return await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        options,
        (error, result) => {
          if (error) {
            return reject(
              new Error(`Upload to Cloudinary failed: ${error.message}`)
            );
          }
          resolve(result);
        }
      );
      stream.end(fileBuffer);
    });
  } catch (error) {
    console.error("Error in Cloudinary upload function:", error);
    throw error;  // Re-throw the error to be handled elsewhere
  }
}

exports.fileUpload = async (req, res) => {
  console.log("In fileUpload!!");
  try {
    console.log("Entered fileUpload Backend");
    const { name, description, date, price, tag, user } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(user)) {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID format",
      });
    }
    const userId = new mongoose.Types.ObjectId(user);
    
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No files were uploaded",
      });
    }

    const files = req.files;
    const images = [];

    for (let file of files) {
      // const supportedTypes = ["jpg", "jpeg", "png"];
      // const filetype = file.originalname.split(".").pop().toLowerCase();
      // if (!isFileSupported(filetype, supportedTypes)) {
      //   return res.status(415).json({
      //     success: false,
      //     message:
      //       "File format not supported. Allowable formats are png, jpg, and jpeg",
      //   });
      // }
      const supportedTypes = ["image/jpeg", "image/png"];
      const filetype = file.mimetype; // check MIME type
      if (!isFileSupported(filetype, supportedTypes)) {
        return res.status(415).json({
          success: false,
          message: "File format not supported. Allowable formats are png, jpg, and jpeg",
        });
      }

      try {
        const response = await uploadtoCloudinary(
          file.buffer,
          process.env.FOLDER_NAME,
          70
        );

        if (!response || !response.secure_url) {
          throw new Error("Invalid response from Cloudinary");
        }

        images.push({ url: response.secure_url });
        console.log("Uploaded image URL:", response.secure_url);  // Log uploaded image URL

      } catch (uploadError) {
        console.error("Error uploading to Cloudinary:", uploadError);
        return res.status(500).json({
          success: false,
          message: "Error uploading to Cloudinary",
        });
      }
    }

    const productdata = await Product.create({
      name,
      description,
      date,
      price,
      tag,
      imgUrl: images,
      user: userId
    });

    console.log("Created product data:", productdata);  // Log created product data

    const newdata = await User.findOneAndUpdate(
      { _id: userId },
      {
        $push: {
          products: productdata._id,
        },
      },
      { new: true }
    );

    console.log("Updated user with new product:", newdata);  // Log updated user data
    
    res.json({
      success: true,
      imgUrl: images.map((image) => image.url),
      message: "Images uploaded successfully",
      productdata
    });
  } catch (error) {
    console.error("Error during file upload:", error.stack);  // Log stack trace
    res.status(400).json({
      success: false,
      message: "Something went wrong in Form.js :)",
      error: error.message  // Include error message in response
    });
  }
};

exports.getAllProduct = async (req, res) => {
  try {
    const allProducts = await Product.find();
    return res.status(200).json({
      success: true,
      data: allProducts,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      message: "Can't Fetch Product Data",
      error: error.message,
    });
  }
};

exports.getSingleProduct = async (req, res) => {
  try {
    const { userId } = req.body;
    const singleProduct = await Product.findById(userId);
    res.status(200).json({
      success: true,
      data: singleProduct,
    });
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { userId, name, description, buydate, condition, tag } = req.body;

    if (!req.files) {
      return res.status(400).json({
        success: false,
        message: "No files were uploaded",
      });
    }

    const files = Array.isArray(req.files.filename)
      ? req.files.filename
      : [req.files.filename];
    const images = [];

    for (let file of files) {
      const supportedTypes = ["jpg", "jpeg", "png"];
      const filetype = file.originalname.split(".").pop().toLowerCase();

      if (!isFileSupported(filetype, supportedTypes)) {
        return res.status(415).json({
          success: false,
          message:
            "File format not supported. Allowable formats are png, jpg, and jpeg",
        });
      }

      const response = await uploadtoCloudinary(
        file,
        process.env.FOLDER_NAME,
        70
      );
      images.push({ url: response.secure_url });
    }

    const product = await Product.findByIdAndUpdate(
      userId,
      { name, description, buydate, condition, tag, imgUrl: images },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { userId } = req.body;
    await Product.findByIdAndDelete(userId);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};