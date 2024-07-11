const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  }
});

const formSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true 
  },
  description: {
    type: String,
    required: true 
  },
  buydate: {
    type: Date, 
    required: true 
  },
  condition: {
    type: String,
    required: true 
  },
  tag: { 
    type: String,
    enum: ["Electronics", "Study materials", "Clothing", "Bedding", "Cycle", "Entertainment", "Miscellaneous"],
    required: true 
  },
  imgUrl: [imageSchema] 
});

module.exports = mongoose.model("Product", formSchema);
