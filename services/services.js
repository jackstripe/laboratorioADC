const {saveUserRepo} = require("../repository/courses.repository")
const {encrypt} = require("../utils/encrypt")

function saveUserService(user,password){
    saveUserRepo(user,encrypt(password))
    
}



module.exports={
    saveUserService
}