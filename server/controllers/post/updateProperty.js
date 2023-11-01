const PropertyModel = require("../../models/property.model")

const updateProperty = async (req, res) => {
  const { _id } = req.params
  const { userID } = req.body
  const post = await PropertyModel.findOne({ _id })
  if (post.userID === userID) {
    const post = await PropertyModel.findByIdAndUpdate({ _id }, req.body)
    res.status(200).send({ message: "Post updated successfully", post: post })
  } else {
    res.status(200).send({ message: "You are not authorized." })
  }
}

module.exports = updateProperty
