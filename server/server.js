//Import and require mysql2
const mysql = require('mysql2')
//Import and require inquirer
const inquirer = require("inquirer")
//Import and require asciiart
const logo = require('asciiart-logo');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'password123',
      database: 'callCenter_db'
    },
    console.log(`Connected to the Call Center database.`)
    );