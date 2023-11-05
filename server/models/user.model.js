const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  gender: String,
  age: Number,
  city: String,
  pan: Number,
  role: Number,
})

const UserModel = mongoose.model("user", userSchema)

module.exports = UserModel
