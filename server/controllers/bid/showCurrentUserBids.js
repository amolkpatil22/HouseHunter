const BidModel = require("../../models/bid.model")

const showCurrentUserBids = async (req, res) => {
  try {
    const properties = await BidModel.find({ bidderID: req.body.userID })
    properties.length
      ? res.send({ properties })
      : res.send({ message: "No property found" })
  } catch (error) {
    res.status(500).send({ error })
  }
}

module.exports = showCurrentUserBids
