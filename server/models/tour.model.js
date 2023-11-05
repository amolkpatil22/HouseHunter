const mongoose = require("mongoose")

const tourSchema = mongoose.Schema({
  propertyID: String,
  ownerID: String,
  ownerName: String,
  bidderID: String,
  bidderName: String,
  tourDate: Date,
  tourStatus: Number,
})

const TourModel = mongoose.model("tour", tourSchema)

module.exports = TourModel
