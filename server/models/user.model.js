const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  mobile: String,
  address: String,
  street: String,
  city: String,
  postal_code: Number,
  state: String,
  pan: String,
})

const UserModel = mongoose.model("user", userSchema)

module.exports = UserModel
