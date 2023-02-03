// Requiring modules
const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors())


// Create connection
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password123',
        database: 'callCenter_db'
    }
    );

// Connect
db.connect((err)=> {
    if(err){
        throw err;
    }
    console.log('MySql is connected');
})

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

// Drop database
app.get('/deletedb', (req, res) => {
    let sql = "DROP DATABASE IF EXISTS callCenter_db;";
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send('Database Deleted');
    });
})

// Create database
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE callCenter_db;';
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send('Database Created');
    });
});

// Create product table
app.get('/products', (req, res) => {
    let sql = 'CREATE TABLE products(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, Item VARCHAR(64) NOT NULL, Price INT NOT NULL)';

    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send('Products table created');
    });
});

// Create employees table
app.get('/employees', (req, res) => {
    let sql = 'CREATE TABLE employees(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(64) NOT NULL, last_name VARCHAR(64) NOT NULL, title VARCHAR(64) NOT NULL, busy BIT)';

    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send('Employee table created');
    });
});
// Create users table
app.get('/users', (req, res) => {
    let sql = 'CREATE TABLE users(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(64) NOT NULL, last_name VARCHAR(64) NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(128) NOT NULL, balance INT NULL, ProductID INT, FOREIGN KEY (ProductID) REFERENCES products(id) ON DELETE SET NULL)';

    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send('User table created');
    });
});


// Insert product 1
app.get('/addproduct1', (req, res) => {
    let product = {Item: 'Chicken', Price: 20};
    let sql = 'INSERT INTO products SET ?';
    let query = db.query(sql, product, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Product 1 added')
    });
});

// Select products

app.get('/getproducts', (req, res) => {
    let sql = 'SELECT * FROM products';
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send('Products fetched')
    });
});

app.listen('3001', () => {
    console.log('Server started on port 3001')
});



