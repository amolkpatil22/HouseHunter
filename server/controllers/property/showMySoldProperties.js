const PropertyModel = require("../../models/property.model")

const showMySoldProperties = async (req, res) => {
  const { userID } = req.body
  // const { type } = req.body
  // const skip = page ? (+page - 1) * 3 : 0
  try {
    console.log(userID)
    const properties = await PropertyModel.find({
      userID,
      type: "sell",
      status: 1,
    })
    // .skip(skip)
    // .limit(3)
    if (properties?.length) {
      res.status(200).send({ message: "Success", properties })
    } else {
      res.status(200).send({ message: "No property found" })
    }
  } catch (error) {
    res.status(400).send({ error: `${error}` })
  }
}

module.exports = showMySoldProperties
