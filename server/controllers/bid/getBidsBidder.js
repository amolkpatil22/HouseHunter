const BidModel = require("../../models/bid.model")

const getBidsBidder = (req, res) => {
  try {
    res.send({ message: "debuggin" })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}

module.exports = getBidsBidder
