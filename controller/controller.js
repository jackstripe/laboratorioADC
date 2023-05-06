const express = require("express")
const routes = express.Router()
const { saveUserService } = require("../services/services")
const { loginUserService } = require("../services/login.services")

routes.post('/', async (req,res) => {
    console.log("POSTed")
    let dataInfo = await saveUserService(req.body)
    console.log(dataInfo)
    res.status(200).send({status: 200, msg:"Todo OK", data: dataInfo})
})

routes.get('/login', async (req, res) =>{
    let {body} = req
    console.log("controller Login")
    let data = await loginUserService(body)
    console.log(data)
    let msj = "Invalido"
    if(data === true){
        msj = "valido"
        res.status(200).send({status: 200, msg:msj})
    }else{
        res.status(200).send({status: 401, msg:msj})
    }
    
})


module.exports = routes