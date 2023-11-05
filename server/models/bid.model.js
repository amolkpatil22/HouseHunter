const mongoose = require("mongoose")

const bidSchema = mongoose.Schema({
  propertyID: String,
  ownerID: String,
  ownerName: String,
  bidderID: String,
  bidderName: String,
})

const BidModel = mongoose.model("bid", bidSchema)

module.exports = BidModel
