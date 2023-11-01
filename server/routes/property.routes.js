const express = require("express")
const auth = require("../middlewares/auth.middleware")
const showProperty = require("../controllers/post/showProperty")
const createProperty = require("../controllers/post/createProperty")
const deleteProperty = require("../controllers/post/deleteProperty")
const updateProperty = require("../controllers/post/updateProperty")
const propertyRoute = express.Router()

propertyRoute.get("/", showProperty)
propertyRoute.use(auth)
propertyRoute.post("/add", createProperty)
propertyRoute.delete("/delete/:_id", deleteProperty)
propertyRoute.patch("/update/:_id", updateProperty)

module.exports = propertyRoute
