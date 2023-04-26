const express = require("express")
const routes = express.Router()
const { saveUserService } = require("../services/services")

routes.post('/', (req,res) => {
    console.log("POSTed")
    let {user,password} = req.body
    saveUserService(user,password)
    res.status(200).send({status: 200, msg:"Todo OK"})
})

module.exports = routes