const Product = require("../models/Product");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();
const express = require("express");

function isFileSupported(type, supportedTypes) {
  return supportedTypes.includes(type);
}

async function uploadtoCloudinary(file, folder, quality) {
  const options = { folder, resource_type: "auto" };
  if (quality) {
    options.quality = quality;
  }
  return await cloudinary.uploader
    .upload_stream(options, (error, result) => {
      if (error) {
        throw new Error(error);
      }
      return result;
    })
    .end(file.buffer);
}

exports.fileUpload = async (req, res) => {
  try {
    const { name, description, date, price, tag } = req.body;

    if (!req.files || !req.files.length) {
      return res.status(400).json({
        success: false,
        message: "No files were uploaded",
      });
    }

    const files = req.files;
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

    const productdata = await Product.create({
      name,
      description,
      date,
      price,
      tag,
      imgUrl: images,
    });

    res.json({
      success: true,
      imgUrl: images.map((image) => image.url),
      message: "Images uploaded successfully",
      productdata,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      message: "Something went wrong",
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

    if (!req.files || !req.files.length) {
      return res.status(400).json({
        success: false,
        message: "No files were uploaded",
      });
    }

    const files = req.files;
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

// Define your route for file uploads using Multer middleware
const app = express();
app.post("/upload", upload.array("filename"), exports.fileUpload);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
