const UserModel = require("../../models/user.model")

const updateUser = async (req, res) => {
  try {
    const id = req.body.userID
    if (id) {
      const updatedUser = await UserModel.findByIdAndUpdate(id, {
        $set: { ...req.body },
      })

      if (updatedUser) {
        res.status(200).send({ message: "User updated successfully" })
      } else {
        res.status(404).send({ error: "User not found" })
      }
    } else {
      res.status(400).send({ error: "User ID is missing" })
    }
  } catch (error) {
    res.status(500).send({ error })
  }
}

module.exports = updateUser
