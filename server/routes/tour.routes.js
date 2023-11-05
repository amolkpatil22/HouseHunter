const express = require("express")
const createTour = require("../controllers/tour/createTour")
const viewTours = require("../controllers/tour/viewTours")
const auth = require("../middlewares/auth.middleware")
const tourRouter = express.Router()

tourRouter.use(auth)
tourRouter.post("/add/:_id", createTour)
tourRouter.get("/view/:_id", viewTours)

module.exports = tourRouter
