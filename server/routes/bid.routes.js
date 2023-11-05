const express = require("express")
const createBid = require("../controllers/bid/createBid")
const auth = require("../middlewares/auth.middleware")
const getBidsOwner = require("../controllers/bid/getBidsOwner")
const showCurrentUserBids = require("../controllers/bid/showCurrentUserBids")
const bidRouter = express.Router()

bidRouter.use(auth)
bidRouter.get("/:_id", createBid)
bidRouter.get("/property/:_id", getBidsOwner)
bidRouter.get("/", showCurrentUserBids)

module.exports = bidRouter
