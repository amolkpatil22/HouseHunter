const PropertyModel = require("../../models/property.model")

const search = async (req, res) => {
  try {
    console.log(req.query)
    const result = await PropertyModel.find({
      ...req.query,
      status: 0,
    })
    if (result.length) {
      res.status(200).send({
        count: result.length,
        properties: result,
        message: `${result.length} properties found`,
      })
    } else {
      res.status(200).send({ message: "0 property found" })
    }
  } catch (error) {
    res.status(400).send({ error: `${error}` })
  }
}

module.exports = search
