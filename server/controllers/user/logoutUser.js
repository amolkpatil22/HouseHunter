const mongoose = require("mongoose")
const BlacklistModel = require("../../models/blacklist.model")

const logoutUser = async (req, res) => {
  try {
    const token = req.headers.authorization.split("Bearer ")[1]
    await BlacklistModel.create({ token })
    res.status(200).send({ message: "Logged out successfully" })
  } catch (error) {
    res.status(400).send({ error })
  }
}

module.exports = logoutUser
