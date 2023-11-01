const jwt = require("jsonwebtoken")
const BlacklistModel = require("../models/blacklist.model")
require("dotenv").config()

const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split("Bearer ")[1] || null
  if (token) {
    const loggedOut = await BlacklistModel.findOne({ token })
    if (loggedOut) {
      res.status(400).send({ error: "Not logged in" })
    } else {
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          res.status(400).send({ error: err })
        }
        if (decoded) {
          req.body.name = decoded.name
          req.body.userID = decoded.userID
          next()
        }
      })
    }
  } else {
    res.status(400).send({ error: "Not logged in" })
  }
}

module.exports = auth
