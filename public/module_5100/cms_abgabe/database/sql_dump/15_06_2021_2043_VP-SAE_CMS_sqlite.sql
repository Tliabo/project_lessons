/*
Create SQLITE DB
does not need id, because rowid is generated automatically
*/

CREATE TABLE `adminUser`
(
    `firstname` varchar(255)        NOT NULL,
    `lastname`  varchar(255)        NOT NULL,
    `email`     varchar(255) UNIQUE NOT NULL,
    `password`  varchar(255)        NOT NULL
);

CREATE TABLE `page`
(
    `title`   varchar(255),
    `contend` varchar(255)
);

CREATE TABLE `image`
(
    `src`         varchar(255) NOT NULL,
    `alt`         varchar(255),
    `name`        varchar(255),
    `description` varchar(255),
    `price`       varchar(255),
    `category`    int,
    FOREIGN KEY (`category`) REFERENCES `category` (`rowid`)
);

CREATE TABLE `category`
(
    `name` varchar(255) NOT NULL
);
