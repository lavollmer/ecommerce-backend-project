-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

-- Use DATABASE
USE ecommerce_db;

-- Create category Table--
CREATE TABLE Category (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  category_name VARCHAR(100) NOT NULL
)

-- Create product Table--
CREATE TABLE Product (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(100) NOT NULL,
  price DECIMAL NOT NULL,
  stock INT NOT NULL,
  category_id INT
)

-- Create Tag Table--
CREATE TABLE Tag (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  tag_name VARCHAR(50) NOT NULL
)

--Create ProductTag table --

CREATE TABLE ProductTag (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  product_id INT 
  tag_id INT 
)