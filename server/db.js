const mysql = require('mysql')

const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database:"guestbook" 
})

module.exports = db;