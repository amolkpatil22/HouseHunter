const BidModel = require("../../models/bid.model")
const PropertyModel = require("../../models/property.model")

const createBid = async (req, res) => {
  const { _id } = req.params
  const property = await PropertyModel.findOne({ _id })
  if (property) {
    await BidModel.create({
      propertyID: _id,
      ownerID: property.userID,
      ownerName: property.name,
      bidderID: req.body.userID,
      bidderName: req.body.name,
    })

    res
      .status(200)
      .send({ message: "Property owner notified that you are interested." })
  } else {
    res.status(400).send({ error: "This property doesn't exist" })
  }
}

module.exports = createBid
