const mysql = require('mysql');

//SQL Connection
const mc = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'hospital'
})
module.exports=mc;