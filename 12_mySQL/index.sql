show databases

CREATE DATABASE mydatabase DEFAULT CHARACTER set utf8 COLLATE utf8_general_ci;

CREATE DATABASE sesac CHARACTER set utf8mb4 COLLATE utf8mb4_unicode_ci;
/*
utf8 : 한글 및 영어
utf8mb4 : utf8보다 더 많은 문자열 저장 가능
-이모지, 특수문자, 다국어, etc....
 */

-- db 사용선언
 use sesac

--  테이블 목록 확인
show TABLES

DROP DATABASE mydatabase

############################# 테이블 관련 명령어 ###############################

/* 
CREATE TABLE 테이블 이름(
    속성이름1 데이터타입 제약조건,
    속성이릅2 데이터타입 제약조건
);
 */
-- 제약조건
-- NOT NULL : null 허용 x
-- AUTO_INCREMENT : 자동 숫자 증가
-- PRIMARY KEY : 기본 키 설정(중복 허용 X, null 허용 x)
-- DEFAULT : 기본 값 설정
-- UNIQUE : 중복 허용 X, NULL 허용 X, 한 테이블에 여러 개 설정 가능

CREATE TABLE products(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    model_number VARCHAR(50) NOT NULL,
    series VARCHAR(30) NOT NULL
);

-- 테이블 목록 확인
SHOW TABLES;

-- 테이블 구조 확인
DESC products;

DROP TABLE products;


-- 테이블 속성 수정
ALTER TABLE products ADD new_column VARCHAR(20);

ALTER TABLE products MODIFY new_column INT;

ALTER TABLE products DROP new_column;

############### 여기부터 DML #####################
-- 데이터 조작어
-- 데이터 CRUD를 위해 사용하는 SQL문


CREATE TABLE user(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(100)
);

SHOW TABLES

DESC user;

-- CREATE >> INSERT TNTO
INSERT INTO user (name, age, address) VALUES ('김민정', 20, '서울특별시 마포구');
INSERT INTO user (name, age, address) VALUES ('이지수', 22, '서울특별시 강남구');
;INSERT INTO user (name, age, address) VALUES ('최솔이', 22, '대구광역시 동구');
INSERT INTO user (name, age, address) VALUES ('한소희', 25, '부산광역시 관악구');
INSERT INTO user (name, age, address) VALUES ('정세희', 19, '서울특별시 노원구');
INSERT INTO user (name, age, address) VALUES ('이형석', 23, '서울특별시 강서구');
INSERT INTO user (name, age, address) VALUES ('김성민', 32, '부산광역시 동구');
INSERT INTO user (name, age, address) VALUES ('박수진', 37, '강원도 강릉시');
INSERT INTO user (name, age, address) VALUES ('권순모', 26, '충청남도 공주시');
INSERT INTO user (name, age, address) VALUES ('진현정', 40, '강원도 속초시');
INSERT INTO user (name, age, address) VALUES ('권희수', 36, '서울특별시 영등포구');

-- READ >> SELECT [컬럼이름] FROM [테이블 이름] (WHERE 조건)
SELECT * FROM user; -- 전체 컬럼 전체 조회

SELECT name FROM user; -- 특정 컬럼 전체 조회

SELECT age, name FROM user -- 특정 컬럼 n개 전체 조회

--where 절을 이용하여 조건 걸기
select * from user WHERE age >=25; -- 이상

SELECT * FROM user WHERE id = 3; -- 일치 비교

SELECT id, age FROM user WHERE name = '권순모';

--LIKE 패턴 조회
SELECT * FROM USER WHERE address LIKE '서울%'; -- 서울로 시작하는 주소값 찾아오기

SELECT * FROM user WHERE name LIKE '__희'; -- 마지막 글자가 희인 사람

SELECT * FROM user WHERE name LIKE '%희%'; -- 이름에 희가 들어가는 사람

SELECT * FROM user WHERE address LIKE '%광역시%'; -- 주소에 광역시가 들어가는 사람



-- IN(list)
SELECT * FROM user WHERE age IN(20,21,22,23); -- 나이가 20,21,22,23살 중 하나

--BETWEEN
SELECT * FROM user WHERE age BETWEEN 25 AND 30; -- 25 이상 30 이하


-- IS NULL, IS NOT NULL
INSERT INTO user(name,age) VALUES('서현승', 28);

-- 주소가 NULL인 사람 조회
SELECT * FROM user WHERE address IS NULL;

-- 주소가 NULL이 아닌 사람 조회
SELECT * FROM user WHERE address IS NOT NULL;

-- 논리 연산자
-- 주소가 null이 아니면서 age가 25 초과인 전체 속성
SELECT * FROM user WHERE address IS NOT NULL AND age > 25;

--최씨이고, 나이가 22인 사람
SELECT * FROM user WHERE name LIKE '최%' AND age = 22;

-- 서울에 살거나 김씨인 사람
SELECT * FROM user WHERE address LIKE '서울%' OR name LIKE '김%';

-- ORDER BY, DISTINCT, LIMIT
SELECT * FROM user ORDER BY age DESC; -- age 기준으로 내림차순

SELECT * FROM user WHERE id > 6 ORDER BY age ASC; -- id가 6 이상인 사람을 age 기준으로 내림차순

SELECT age FROM user ORDER BY age asc;  

SELECT DISTINCT age FROM user ORDER BY age ASC;

-- 서울시에 사는 사람의 이름만, 2개만
SELECT name, address FROM user WHERE address LIKE '서울%' ORDER BY name ASC LIMIT 3;