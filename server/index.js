const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')


app.use(cors());
app.use(express.json());


// Create connection
const db = mysql.createConnection(
    {
        user: 'root',
        host: 'localhost',
        password: 'password123',
        database: 'callCenter_db'
    }
);




// // Activating Cors
// app.use(cors());


// Route to react
app.post('/register', (req, res) => {

    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const password = req.body.password;

    db.query('INSERT INTO users (fname, lname, email, password) VALUES (?,?,?,?)', 
    [fname, lname, email, password], (err, result) => {
        if (err) throw err;
    })
})

app.listen('3001', () => {
    console.log('Server started on port 3001')
});