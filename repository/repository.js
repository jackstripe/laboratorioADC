const {getConnection} = require("../connection/connection")


function saveUserRepo(userInsert, encryptedPwd){

    let knex = getConnection
    console.log(knex.select("*").from('user'))
    knex('user').insert({
        user: userInsert,
        password:encryptedPwd
  })
  .then(() => {
    console.log('Data inserted successfully');
    //knex.destroy(); // Close the database connection
  })
  .catch((err) => {
    console.log(err);
    //knex.destroy(); // Close the database connection
  });
}

module.exports = {
  saveUserRepo
}
