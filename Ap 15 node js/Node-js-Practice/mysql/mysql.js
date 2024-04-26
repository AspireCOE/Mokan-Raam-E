var mysql = require('mysql2');

var con = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:'notes'
}).promise()

// still exploring ........

async function fun(){

    var query1 = await con.query("SELECT * FROM note")

}

console.log(fun.query1);