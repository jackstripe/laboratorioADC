const {getConnection} = require("../connection/connection")


function saveUserRepo(body){
    let knex = getConnection()
    return await = knex.insert(body).from('users').returning('uuid')
}

async function retrievePassword(body){
    let knex = getConnection()
    const row = await  knex.select('password').from('users').where('username', '=', body.username).first();
    return row
    //.then(rows => {
    //  console.log(rows); 
    //})
    
}

module.exports = {
  saveUserRepo,
  retrievePassword
}
