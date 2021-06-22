create table users
(
    id        int auto_increment,
    username  varchar(255) not null,
    password  varchar(255) not null,
    lastlogin timestamp    null,
    constraint id
        unique (id)
);

alter table users
    add primary key (id);

INSERT INTO `login-prezioso`.users (id, username, password, lastlogin) VALUES (1, 'martin', 'michael', null);