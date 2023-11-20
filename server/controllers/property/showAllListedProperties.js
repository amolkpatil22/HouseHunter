const PropertyModel = require("../../models/property.model")

const showAllListedProperties = async (req, res) => {
  try {
    const properties = await PropertyModel.find({ userID: req.body.userID })
    if (properties.length) {
      res
        .status(200)
        .send({ message: `${properties.length} properties found`, properties })
    } else {
      res.status(200).send({ message: "No property found" })
    }
  } catch (error) {
    res.status(200).send({ error: `${error}` })
  }
}

module.exports = showAllListedProperties
