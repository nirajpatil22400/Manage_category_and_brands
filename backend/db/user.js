//entities

const mongoose = require("mongoose");

//schema created
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    isAdmin: Boolean
})

//creating model - orm
const User = mongoose.model("users", userSchema);
module.exports = User;