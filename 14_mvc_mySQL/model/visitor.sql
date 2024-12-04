show DATABASES;
use sesac;
CREATE Table visiter(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)  not NULL,
    comment MEDIUMtext
);

desc visiter;

insert into visiter(name, comment) VALUES('홍길동','내가왔다');
insert into visiter VALUES(null,'이찬혁','으라차차');
insert into visiter VALUES(null,'삭제예정','으라차차');

SELECT * from visiter;

UPDATE visiter set comment='야호' WHERE id =2;
DELETE FROM visiter WHERE id=3;

-- DCL
-- mySQL 사용자 생성
CREATE user 'sesac'@'%' IDENTIFIEd by '1234';
-- 권한부여
grant all PRIVILEGES on *.* to 'sesac'@'%' WITH GRANT OPTION;
-- 암호화
alter user 'sesac'@'%' IDENTIFIED WITH mysql_native_password by '1234';
FLUSH PRIVILEGES;

SELECT * FROm mysql.user;
show GRANTs for 'sesac'@'%';