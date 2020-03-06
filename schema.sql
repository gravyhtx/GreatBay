DROP DATABASE IF EXISTS auction_db;

CREATE DATABASE auction_db;

USE auction_db;


CREATE TABLE auction (
  id INT NOT NULL AUTO_INCREMENT,
  item VARCHAR(30) NULL,
  price INT(50) NULL,
  category VARCHAR(50),
  PRIMARY KEY (id)
);

SELECT * FROM auction;
