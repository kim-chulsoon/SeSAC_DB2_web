show DATABASES;

CREATE DATABASE practice DEFAULT CHARACTER set utf8 COLLATE utf8_general_ci;

use practice

create Table member(
    id VARCHAR(20) not null PRIMARY KEY ,
    name VARCHAR(5) not NULL,
    age int NULL,
    gender VARCHAR(2) not null,
    email VARCHAR(50),
    promotion VARCHAR(2) DEFAULT("x")
);

desc member

alter table member modify id VARCHAR(10);
alter table member drop age;
alter table member add interest VARCHAR(100);

desc MEMBER

CREATE Table user (
    id VARCHAR(10) not null PRIMARY KEY,
    pw VARCHAR(20) not null,
    name VARCHAR(5) not null,
    gender ENUM('f', 'm', '') DEFAULT '',
    birthday DATE not NULL,
    age int(3) not null DEFAULT 0
);

desc user

INSERT INTO user (id,pw,name,gender,birthday,age) VALUES ('hong1234','8o4bkg', '홍길동', 'M', '1990-01-31', 33);
INSERT INTO user (id,pw,name,gender,birthday,age) VALUES ('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31);
INSERT INTO user 
(id,pw,name,gender,birthday,age) VALUES 
('hanjo', '3k48fn4', '한조', 'M', '1984-10-18', 39);
INSERT INTO user 
(id,pw,name,gender,birthday,age) VALUES 
('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47);
INSERT INTO user 
(id,pw,name,gender,birthday,age) VALUES 
('dvadva', 'ksf3ah', '송하나', 'F', '2001-06-03', 22);
INSERT INTO user 
(id,pw,name,gender,birthday,age) VALUES 
('Jungkrat', '41fhaf', '정크랫', 'M', '1999-11-11', 2);

SELECT * FROM user;

SELECT * from user order by birthday asc;
SELECT * FROM user where gender = 'm' ORDER BY name DESC;
SELECT id,name FROM user where birthday like '199%'

SELECT * FROM user WHERE birthday LIKE '%06%' ORDER BY birthday ASC;

SELECT * FROM user WHERE gender='M' AND birthday LIKE '197%';

SELECT * FROM user ORDER BY age DESC LIMIT 3;

SELECT * FROM user WHERE age BETWEEN 25 AND 50;

UPDATE user SET pw=12345678 WHERE id='hong1234';

DELETE FROM user WHERE id='jungkrat';