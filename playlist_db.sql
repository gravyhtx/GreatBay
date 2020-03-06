DROP DATABASE IF EXISTS playlist_db;

CREATE DATABASE playlist_db;

USE playlist_db;


CREATE TABLE songs (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  artist VARCHAR(30) NULL,
  genre VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre)
VALUES ("T N Biscuits", "slowthai", "rap")
, ("Into the Void", "Black Sabbath", null)
, ("Heart of Glass", null, "disco");

-- SELECT * FROM songs;