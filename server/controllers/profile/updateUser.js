const UserModel = require("../../models/user.model")

const updateUser = async (req, res) => {
  const { userID } = req.body
  try {
    const user = await UserModel.findById(userID) // Use findById to find a single user by ID
    if (user) {
      const updatedUser = await UserModel.findByIdAndUpdate(userID, req.body, {
        new: true,
      }) // Use findByIdAndUpdate with the { new: true } option to return the updated document
      if (updatedUser) {
        res.send({ message: "User updated successfully" })
      } else {
        res.send({ error: "Error updating user" })
      }
    } else {
      res.send({ error: "User not found." })
    }
  } catch (error) {
    res.send({ error: error.message }) // Use error.message to get the error message
  }
}

module.exports = updateUser
