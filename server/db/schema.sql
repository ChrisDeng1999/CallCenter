DROP DATABASE IF EXISTS callCenter_db;
CREATE DATABASE callCenter_db;

USE callCenter_db;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(64) NOT NULL,
    last_name VARCHAR(64) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(128) NOT NULL,
    balance INT NULL,
    ProductID INT,
    FOREIGN KEY (ProductID)
    REFERENCES products(id)
    ON DELETE SET NULL
);

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(64) NOT NULL,
    last_name VARCHAR(64) NOT NULL,
    title VARCHAR(64) NOT NULL,
    busy BIT
);

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Item VARCHAR(64) NOT NULL,
    Price INT NOT NULL
);