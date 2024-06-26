const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    phone:{
        type:Number,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    },
    Products: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "ProductForm",
        },
      ],
    
});
module.exports = mongoose.model("user",userSchema);