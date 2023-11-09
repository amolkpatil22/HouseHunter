const UserModel = require("../../models/user.model")
const bcrypt = require("bcrypt")

const updatePassword = async (req, res) => {
  const { userID } = req.body
  try {
    const user = await UserModel.findById(userID) // Use findById to find a single user by ID
    if (user) {
      bcrypt.hash(req.body.password, 3, async (err, hash) => {
        if (err) {
          res.status(400).send({ error: err })
        } else {
          const updatedUser = await UserModel.findByIdAndUpdate(userID, hash)
          res.status(200).send({ message: "Password changed" })
        }
      })
    } else {
      res.send({ error: "User not found." })
    }
  } catch (error) {
    res.send({ error: error.message }) // Use error.message to get the error message
  }
}

module.exports = updatePassword
