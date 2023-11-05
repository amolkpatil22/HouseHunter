const mongoose = require("mongoose")

const propertySchema = mongoose.Schema(
  {
    description: String,
    address: String,
    street_name: String,
    state: String,
    zipcode: Number,
    beds: Number,
    baths: Number,
    tags: [String],
    images: [String],
    living_area: Number,
    type: String,
    status: Number,
    price: Number,
    name: String,
    userID: String,
    buyerID: String,
    buyerName: String,
  },

  {
    collection: "properties",
  }
)

const PropertyModel = mongoose.model("properties", propertySchema)

module.exports = PropertyModel
