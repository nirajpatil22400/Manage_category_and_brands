//entities

const mongoose = require("mongoose");

//schema created
const categorySchema = new mongoose.Schema({
    name: String,
})

//creating model - orm
const Category = mongoose.model("categories", categorySchema);
module.exports = Category;