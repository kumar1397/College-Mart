const Product = require('../models/Product')
const cloudinary = require("cloudinary").v2;
require("dotenv").config();
function isFileSupported(type,supportedTypes){
    return supportedTypes.includes(type);
}
async function uploadtoCloudinary(file,folder,quality){
    const options = {folder};   
    console.log("temp file path",file.tempFilePath)
    options.resource_type = "auto";
    if (quality){
        options.quality = quality;
    }
    return await cloudinary.uploader.upload(file.tempFilePath,options);
}   

exports.localFileUpload = async(req,res) =>{
    try{
        const file = req.files.file;
        console.log("File incoming",file);

        let path = __dirname + "/files" + Date.now() +'.' + `${file.name.split('.')[1]}`;
        console.log("path",path);
        file.mv(path,(err) =>{
            console.log(err);
        });

        res.json({
            success:true,
            message:"local file uploaded successfully",
        })

    }
    catch(error){
        console.log(error);

    }
}

exports.fileUpload = async (req,res) =>{
    try{
        const {name,description,buydate,condition,tag} = req.body;
        const file = req.files.filename;


        const supportedTypes = ["jpg","jpeg","png"];
        const filetype = file.name.split('.')[1].toLowerCase();
        if (!isFileSupported(filetype,supportedTypes)){
            return res.status(400).json({
                success:false,
                message:`file format not supported. Allowable formats are png,jpg and jpeg`
            })
        }
        
        console.log(`correct format`)
        console.log(process.env.FOLDER_NAME)
        const response = await uploadtoCloudinary(file,process.env.FOLDER_NAME,70);
        console.log(`file uploaded`);
        console.log(response);
        const productdata = await Product.create({
            name,description,buydate,condition,tag,imgUrl:response.secure_url,
        }) 
        console.log(`printing image url`);
        res.json({
            successs:true,
            imgUrl:response.secure_url,
            message:"image uploaded successfully"
        })

    }
    catch(error){
        console.error(error);
        res.status(400).json({
            success:false,
            message:`something went wrong`
        })

    }
}