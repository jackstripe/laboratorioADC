const {saveUserRepo} = require("../repository/repository")
const {encryptPwd} = require("../util/util.encrypt")


async function saveUserService(user,password){
    let encPwd = await encryptPwd(password)
    saveUserRepo(user,encPwd)
    
}

module.exports={
    saveUserService
}