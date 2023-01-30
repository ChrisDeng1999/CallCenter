//Import and require mysql2
const mysql = require('mysql2')

//Impoirt and require express
const express = require('express');

const path = require('path');
const helpers = require('./utils/helpers');

const app = express();

require(`dotenv`).config();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
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