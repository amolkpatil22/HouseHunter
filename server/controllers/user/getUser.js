const UserModel = require("../../models/user.model")

const getUser = async (req, res) => {
  try {
    const user = await UserModel.findOne({ _id: req.body.userID })
    user
      ? res.send({ name: user.name, email: user.email })
      : res.send({ name: "Guest", email: "no email" })
  } catch (error) {}
}

module.exports = getUser
