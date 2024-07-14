CREATE DATABASE IF NOT EXISTS ferresoft; 

USE ferresoft;

CREATE TABLE products (
    id INT (15) NOT NULL AUTO_INCREMENT,
    name VARCHAR (45) DEFAULT NULL,
    category VARCHAR (45) DEFAULT NULL,
    price INT (20) DEFAULT NULL,
    imgURL VARCHAR (128),
    PRIMARY KEY(id)
);

DESCRIBE products;

INSERT INTO product VALUES
    (1, 'martillo', 'herramienta manual', 10000, 'www.google.com' ),
    (2, 'Alicate', 'herramienta manual', 50000, 'www.google.com' ),
    (3, 'Serrucho', 'herramienta manual', 20000, 'www.google.com' ),
    (4, 'Taladro', 'herramienta Electrica', 20000, 'www.google.com' );