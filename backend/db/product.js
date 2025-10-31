//entities

const mongoose = require("mongoose");

//schema created
const productSchema = new mongoose.Schema({
    name: String,
    shotDescription: String,
    description: String,
    purchasePrice: Number,
    sellingPrice: Number,
    images: Array(String),
    categoryId: { type: Schema.Types.ObjectId, ref: 'categories' } //this is the way to make foreign key relationship 
})

//creating model - orm
const Product = mongoose.model("products", productSchema);
module.exports = Product;