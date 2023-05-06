require('dotenv').config()
const express = require("express")
const bodyParser = require("body-parser")
const courses = require("./controller/controller")
const app= express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use("/v1/user", courses)
app.use("/v1/user/login", courses)
app.listen(process.env.PORT, () => {
    console.log(`Server is running in port ${process.env.PORT}` )
})