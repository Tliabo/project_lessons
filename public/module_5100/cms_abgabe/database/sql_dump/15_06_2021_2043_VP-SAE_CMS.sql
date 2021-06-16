/* Create Mysql DB */

CREATE TABLE `adminUser` (
  `id` int UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) UNIQUE NOT NULL,
  `password` varchar(255) NOT NULL
);

CREATE TABLE `page` (
  `id` int UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` varchar(255),
  `contend` varchar(255)
);

CREATE TABLE `image` (
  `id` int UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `src` varchar(255) NOT NULL,
  `alt` varchar(255),
  `name` varchar(255),
  `description` varchar(255),
  `price` varchar(255),
  `category` int
);

CREATE TABLE `category` (
  `id` int UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL
);

ALTER TABLE `image` ADD FOREIGN KEY (`category`) REFERENCES `category` (`id`);
