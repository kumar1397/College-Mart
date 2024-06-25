const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
    ProductName: { type: String },
    ProductDescription: { type: String },
    price: {
      type: Number,
    },
    ProductImage: {
      type: String,
    },
    BuyDate:{
        type:Date
    },
    ProductCondition: {
      type: [String],
      enum:["Recently bought","used and in good condition","used and in fair condition"]
    },
    tag: {
      type: String,
      enum: ["Electronics","Study materials","Clothing","Bedding","Cycle","Entertainment","Miscellaneous"],
    },
})

module.exports = mongoose.model("ProductForm",FormSchema);