const {encryptPwd} = require("../util/util.encrypt")
const { v4: uuidv4 } = require('uuid');


async function saveUserService(body){

    try{
        let encPwd = await encryptPwd(body.password)
        body.password = encPwd
        body.uuid = uuidv4()
        let dataCreated = await saveUserRepo(body)
        return dataCreated
    }catch(err){
        console.log(err)
    }
    
}


module.exports={
    saveUserService
}