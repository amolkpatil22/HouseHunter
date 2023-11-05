const PropertyModel = require("../../models/property.model")
const TourModel = require("../../models/tour.model")

const createTour = async (req, res) => {
  const { userID, name, tourDate } = req.body
  const { _id } = req.params
  const property = await PropertyModel.findOne({ _id })
  if (property) {
    try {
      await TourModel.create({
        propertyID: property._id,
        ownerID: property.userID,
        ownerName: property.name,
        bidderID: req.body.userID,
        bidderName: req.body.name,
        tourDate,
        tourStatus: 0,
      })
      res.status(200).send({ message: "Tour booked successfully." })
    } catch (error) {
      res.status(404).send({ error })
    }
  }
}

module.exports = createTour
