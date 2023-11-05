const PropertyModel = require("../../models/property.model")

const createProperty = async (req, res) => {
  try {
    const post = await PropertyModel.create({
      ...req.body,
    })

    res.status(200).send({ message: "Property created successfully" })
  } catch (error) {
    res.status(400).send({ error })
  }
}

module.exports = createProperty
