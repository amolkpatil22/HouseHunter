const PropertyModel = require("../../models/property.model")

const bookProperty = async (req, res) => {
  const { _id } = req.params
  const { userID } = req.body
  const post = await PropertyModel.findOne({ _id })
  if (post.userID !== userID) {
    const post = await PropertyModel.findByIdAndUpdate(
      { _id },
      {
        status: req.body.status,
        buyerName: req.body.name,
        buyerID: req.body.userID,
      }
    )
    res.status(200).send({ message: "Post updated successfully", post: post })
  } else {
    res.status(200).send({ message: "You are not authorized." })
  }
}

module.exports = bookProperty
