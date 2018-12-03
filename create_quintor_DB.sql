CREATE TABLE brands (
    id int NOT NULL AUTO_INCREMENT,
    name varchar (255) NOT NULL,
	PRIMARY KEY (id)
	);

CREATE TABLE models (
    id int NOT NULL AUTO_INCREMENT,
    name varchar (255) NOT NULL,
    brand_id int NOT NULL,
	PRIMARY KEY (id),
    FOREIGN KEY (brand_id) REFERENCES brands(id)

	);