const mongoose = require("mongoose")
const UserModel = require("../../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const loginUser = async (req, res) => {
  const { email, password } = req.body
  const user = await UserModel.findOne({ email })
  if (user) {
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        res.status(400).send({ error: err })
      }
      if (result) {
        jwt.sign(
          { name: user.name, userID: user._id },
          process.env.JWT_SECRET,
          (err, token) => {
            if (err) {
              res.status(400).send({ error: err })
            }
            if (token) {
              res
                .status(200)
                .send({ message: "User logged in successfully.", token })
            }
          }
        )
      }
    })
  } else {
    res.status(400).send({ error: "User not found." })
  }
}

module.exports = loginUser
