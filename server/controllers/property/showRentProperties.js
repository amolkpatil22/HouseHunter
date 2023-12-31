const PropertyModel = require("../../models/property.model")

const showRentProperties = async (req, res) => {
  try {
    const properties = await PropertyModel.find({
      type: "rent",
      status: 0,
    })
    if (properties.length) {
      res.status(200).send({ message: "Success", properties })
    } else {
      res.status(200).send({ message: "No property found" })
    }
  } catch (error) {
    res.status(400).send({ error: `${error}` })
  }
}

module.exports = showRentProperties
