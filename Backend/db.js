require("dotenv").config();

const mysql = require("mysql");
const connection = mysql.createConnection({
    // host: process.env.MYSQL_HOST,
    // port: process.env.MYSQL_PORT,
    // user: process.env.MYSQL_USER,
    // password: process.env.MYSQL_PASS,
    // database: process.env.DEFAULT_DB,


    host: "classmysql.engr.oregonstate.edu",
    user: "cs340_velazqje",
    port: "3306",
    password: "0424",
    database: "cs340_velazqje",
  



});

connection.connect((err) => {
    if (err) console.error(err);
});

module.exports = connection;
