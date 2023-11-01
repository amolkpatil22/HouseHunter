const express = require("express")
const createUser = require("../controllers/user/createUser")
const loginUser = require("../controllers/user/loginUser")
const logoutUser = require("../controllers/user/logoutUser")
const userRouter = express.Router()

userRouter.post("/register", createUser)
userRouter.post("/login", loginUser)
userRouter.get("/logout", logoutUser)

module.exports = userRouter
