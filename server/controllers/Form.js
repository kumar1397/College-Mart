const Product = require('../models/Product');
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

function isFileSupported(type, supportedTypes) {
    return supportedTypes.includes(type);
}

async function uploadtoCloudinary(file, folder, quality) {
    const options = { folder };
    console.log("temp file path", file.tempFilePath);
    options.resource_type = "auto";
    if (quality) {
        options.quality = quality;
    }
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

exports.fileUpload = async (req, res) => {
    try {
        const { name, description, buydate, condition, tag } = req.body;
        const files = req.files.filename;
        const images = [];

        for (let file of files) {
            const supportedTypes = ["jpg", "jpeg", "png"];
            const filetype = file.name.split('.').pop().toLowerCase();
            if (!isFileSupported(filetype, supportedTypes)) {
                return res.status(415).json({
                    success: false,
                    message: `File format not supported. Allowable formats are png, jpg, and jpeg`
                });
            }
            console.log(`going for cloudinary`)
            const response = await uploadtoCloudinary(file, process.env.FOLDER_NAME, 70);
            console.log(`File uploaded`);
            console.log(response);
            images.push({ url: response.secure_url });
        }
        const productdata = await Product.create({
            name, description, buydate, condition, tag, images,
        });
        console.log(`Printing image URL`);
        res.json({
            success: true,
            imgUrl: images.map(image => image.url),
            message: "Images uploaded successfully",
            productdata
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            success: false,
            message: `Something went wrong`
        });
    }
};
