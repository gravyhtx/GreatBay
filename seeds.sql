USE auction_db;

INSERT INTO auction (item, price, category)
VALUES ("TV", 10, "Electronics"),
("Speakers", 25, "Electronics"),
("Record Player", 15, "Electronics"),
("Bull Horn", "50", "vintage"),
("Snow Shoes", "25", "athletic");

SELECT * FROM auction;