const {configDB} = require("../knexfile")

const cn = require('knex')(configDB);

function getConnection(){
    return cn
}

module.exports= {
    getConnection
}