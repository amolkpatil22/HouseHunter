const BidModel = require("../../models/bid.model")

const getBidsOwner = async (req, res) => {
  const { _id } = req.params
  try {
    const bidders = await BidModel.find({
      ownerID: req.body.userID,
      propertyID: _id,
    })
    bidders.length
      ? res.status(200).send({
          message: `${bidders.length} bidders found.`,
          bidders,
        })
      : res.status(200).send({ message: "No bid found" })
  } catch (error) {
    res.status(400).send({ error })
  }
}

module.exports = getBidsOwner
