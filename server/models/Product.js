const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  url:{
    type:String,
    required:true,
  }
})
const formSchema = new mongoose.Schema({
    name: { 
      type: String,
    },
    description:{
      type:String
    },
    buydate:{
      type:String,
    },
    condition:{
      type:String
    },
    tag: { 
      enum:["Electronics","Study materials","Clothing","Bedding","Cycle","Entertainment","Miscellaneous"],
      type: String, 
    },
    imgUrl: [imageSchema]
   
})

module.exports = mongoose.model("Product",formSchema);