const mongoose = require("mongoose");

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
    imgUrl: {
      type: String,
    },
   
})

module.exports = mongoose.model("Product",formSchema);