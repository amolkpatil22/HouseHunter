const express = require("express")
const { default: connection } = require("./utils/connection")
const userRouter = require("./routes/user.routes")
const app = express()
require("dotenv").config()
const cors = require("cors")
const propertyRoute = require("./routes/property.routes")

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.status(200).send({ message: "This is the homepage" })
})

app.use("/user", userRouter)
app.use("/property", propertyRoute)

app.listen(process.env.PORT, async () => {
  try {
    await connection
    console.log("DB Connected")
    console.log(`Server running on port ${process.env.PORT}`)
  } catch (error) {
    console.log(error)
  }
})
