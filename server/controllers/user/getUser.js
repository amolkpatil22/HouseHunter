const UserModel = require("../../models/user.model")

const getUser = async (req, res) => {
  try {
    const user = await UserModel.findOne({ _id: req.body.userID })
    user ? res.send({ user }) : res.send({ message: "Not logged in" })
  } catch (error) {}
}

module.exports = getUser
