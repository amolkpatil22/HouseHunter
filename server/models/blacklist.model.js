const mongoose = require("mongoose")

const blSchema = mongoose.Schema({
  token: String,
})

const BlacklistModel = mongoose.model("bltoken", blSchema)

module.exports = BlacklistModel
