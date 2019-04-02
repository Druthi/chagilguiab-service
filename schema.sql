DROP DATABASE IF EXISTS deepfryd;

CREATE DATABASE deepfryd;

USE deepfryd;

CREATE TABLE stereos (
  id int NOT NULL AUTO_INCREMENT,
  product_name varchar(100),
  product_category varchar(100),
  deepfryd_id varchar(100),
  model_number int NOT NULL,
  average_rating int NOT NULL,
  current_price int NOT NULL,
  previous_price int NOT NULL,
  PRIMARY KEY (ID)
);