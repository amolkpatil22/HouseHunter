const TourModel = require("../../models/tour.model")

const viewTours = async (req, res) => {
  try {
    const { _id } = req.params
    const tourDates = await TourModel.find({
      ownerID: req.body.userID,
      propertyID: _id,
    })
    tourDates.length
      ? res.status(200).send({ tours: tourDates })
      : res.status(200).send({ message: "No tour booked for this property" })
  } catch (error) {
    res.status(500).send({ error })
  }
}

module.exports = viewTours
