const {retrievePassword} = require("../repository/repository")
const {validate} = require("../util/util.encrypt")

async function loginUserService(body){

    console.log("login Service123 ")
    //retrieve password
    
    let psswd = await retrievePassword(body)
    console.log(psswd)
    body.psswdDB = psswd
    console.log(body)
    try{
        let valid = await validate(body)
        console.log(valid+ "On Services");
        return valid
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    loginUserService
}