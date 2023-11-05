const express = require("express")
const auth = require("../middlewares/auth.middleware")
const showProperty = require("../controllers/property/showProperty")
const createProperty = require("../controllers/property/createProperty")
const deleteProperty = require("../controllers/property/deleteProperty")
const updateProperty = require("../controllers/property/updateProperty")
const propertyRoute = express.Router()

propertyRoute.get("/", showProperty)
propertyRoute.use(auth)
propertyRoute.post("/add", createProperty)
propertyRoute.delete("/delete/:_id", deleteProperty)
propertyRoute.patch("/update/:_id", updateProperty)

module.exports = propertyRoute
