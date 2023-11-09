const express = require("express")
const { default: connection } = require("./utils/connection")
const userRouter = require("./routes/user.routes")
const app = express()
require("dotenv").config()
const cors = require("cors")
const propertyRoute = require("./routes/property.routes")
const bidRouter = require("./routes/bid.routes")
const tourRouter = require("./routes/tour.routes")
const profileRouter = require("./routes/profile.routes")

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.status(200).send({ message: "This is the homepage" })
})

app.use("/user", userRouter)
app.use("/properties", propertyRoute)
app.use("/bid", bidRouter)
app.use("/tour", tourRouter)
app.use("/profile", profileRouter)

app.listen(process.env.PORT, async () => {
  try {
    await connection
    console.log("DB Connected")
    console.log(`Server running on port ${process.env.PORT}`)
  } catch (error) {
    console.log(error)
  }
})
