const express = require("express")
const createBid = require("../controllers/bid/createBid")
const auth = require("../middlewares/auth.middleware")
const getBidsOwner = require("../controllers/bid/getBidsOwner")
const getBidsBidder = require("../controllers/bid/getBidsBidder")
const bidRouter = express.Router()

bidRouter.use(auth)
bidRouter.get("/:_id", createBid)
bidRouter.get("/property/:_id", getBidsOwner)
// bidRouter.get("/myproperties", getBidsBidder)
bidRouter.get("/")

module.exports = bidRouter
