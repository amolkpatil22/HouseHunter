const PropertyModel = require("../../models/property.model")

const deleteProperty = async (req, res) => {
  const { _id } = req.params
  const { userID } = req.body
  const post = await PropertyModel.findOne({ _id })
  if (post.userID === userID) {
    const post = await PropertyModel.findByIdAndRemove({ _id })
    res.status(200).send({ message: "Property deleted successfully" })
  } else {
    res.status(200).send({ message: "You are not authorized." })
  }
}

module.exports = deleteProperty
