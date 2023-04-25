const express = require("express")
const routes = express.Router()
const { saveUser } = require("../services/services")

routes.post('/', (req,res) => {
    console.log("POSTed")
    let {user,password} = req.body
    saveUser(user,password)
    res.status(200).send({status: 200, msg:"Todo OK", data: data})
})


module.exports = routes