const PropertyModel = require("../../models/property.model")

const showProperty = async (req, res) => {
  const { userID } = req.body
  const { page } = req.query
  const skip = page ? (+page - 1) * 3 : 0
  try {
    const properties = await PropertyModel.find({ userID }).skip(skip).limit(3)
    if (posts.length) {
      res.status(200).send({ message: "Success", properties })
    } else {
      res.status(200).send({ message: "No property found" })
    }
  } catch (error) {
    res.status(400).send({ error })
  }
}

module.exports = showProperty
