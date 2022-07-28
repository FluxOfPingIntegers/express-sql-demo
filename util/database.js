// implementing dotenv package to share contents of the .env file
require('dotenv').config();

// middleware for interacting with mysql
const mysql = require('mysql2');

// password for accessing the database which is saved in a private .env file
const password = process.env.CASUAL_PASS;

// configuring database connection
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'express_sql_demo',
  password: password
});

// interacting with database
module.exports = pool.promise();