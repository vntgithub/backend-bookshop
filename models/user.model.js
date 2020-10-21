const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String, 
  password: String,
  urlimg: String,
  adress: String
});

const User = mongoose.model("User", userSchema, "users");

module.exports = User;
