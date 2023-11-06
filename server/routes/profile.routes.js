const express = require("express")
const updateUser = require("../controllers/profile/updateUser")
const auth = require("../middlewares/auth.middleware")
const changePassword = require("../controllers/profile/changePassword")
const profileRouter = express.Router()

profileRouter.use(auth)
profileRouter.patch("/update", updateUser)
profileRouter.patch("/change-password", changePassword)

module.exports = profileRouter
