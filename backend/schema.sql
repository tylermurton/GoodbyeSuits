DROP DATABASE IF EXISTS ByeSuitsLogin;
CREATE DATABASE IF NOT EXISTS ByeSuitsLogin;
USE ByeSuitsLogin;

CREATE TABLE user (
	id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(240) NOT NULL,
    password VARCHAR(240) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO user (username, password) VALUES ('Jon', '$2b$09$9c93nOp0xjco3ZAjzdT8GOIaBBGED/crqNyegf3yd9CrjXWBhI01C');