DROP DATABASE IF EXISTS ByeSuitsLogin;
CREATE DATABASE ByeSuitsLogin;
USE ByeSuitsLogin;


CREATE TABLE user (
	id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(240) NOT NULL,
    password VARCHAR(240) NOT NULL,
    PRIMARY KEY(id)
);


INSERT INTO user (username, password) VALUES ('jon', '$2b$09$PkCSMPlN7fwBVAtpMRSk8.sKupplGmG4QDjfkrd/sRRRtun1GcX06');