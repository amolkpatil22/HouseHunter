const UserModel = require("../../models/user.model")

const deleteUser = async (req, res) => {
  try {
    const user = await UserModel.findOne({ _id: req.body.userID })
    if (user) {
      const deletedUser = await UserModel.findByIdAndRemove(req.body.userID)
      if (deletedUser) {
        res.status(200).send({ message: "User deleted successfully." })
      } else {
        res.status(500).send({ error: "Failed to delete user" })
      }
    } else {
      res.status(400).send({ error: "User not found" })
    }
  } catch (error) {
    res.status(500).send({ error })
  }
}

module.exports = deleteUser
