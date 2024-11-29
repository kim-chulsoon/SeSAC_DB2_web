show TABLEs;
CREATE Table customer(
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    birthday date NOT NULL
);
DESC customer;
INSERT INTO customer VALUES('aaa','손흥민','1992-03-17');
INSERT INTO customer VALUES('bbb','황희찬','1997-11-01');
INSERT INTO customer VALUES('ccc','이강인','2001-05-31');
INSERT INTO customer VALUES('ddd','조현우','1992-03-17');

SELECT * FROM customer;

-- 외래키 테이블
-- on update cascade : 기준 테이블(customer)의 데이터가 변경되면 참조 테이블(orderlist)의 데이터도 변경
-- 회원테이블의 id가 변경되면 구매테이블의 customer_id가 같이 변경됨

-- on delete cascade : 기준 테이블(customer)의 데이터가 삭제되면 참조테이블(orderlist)의 데이터도 삭제
-- 회원 테이블의 id가 삭제되면 구매테이블의 customer_id가 같이 삭제됨

CREATE TABLE orderlist(
    id int AUTO_INCREMENT PRIMARY KEY,
    customer_id VARCHAR(10) NOT NULL,
    product_name VARCHAR(20) NOT NULL,
    quantity INT,
    Foreign Key (customer_id) REFERENCES customer(id) on UPDATE CASCADE on delete CASCADE
);

-- 테이블 삭제 시
-- 구매 테이블(orderlist, 외래키가 있는 테이블) 먼저 삭제
-- 회원 테이블(customer, 참조되는 기본키가 있는 테이블)을 나중에 삭제 
desc orderlist
INSERT into orderlist (customer_id, product_name, quantity) VALUES('aaa','맥북',1);
INSERT into orderlist (customer_id, product_name, quantity) VALUES('bbb','빅파이',31);
INSERT into orderlist (customer_id, product_name, quantity) VALUES('ccc','키보드',3);
INSERT into orderlist (customer_id, product_name, quantity) VALUES('bbb','초코파이',5);
INSERT into orderlist (customer_id, product_name, quantity) VALUES('ccc','텀블러',2);

-- customer 테이블에 없는 회원은 구매할 수 없음
-- INSERT into orderlist (customer_id, product_name, quantity) VALUES('fff','텀블러',2);

SELECT * FROM orderlist

-- ####################################################
--  join : 두 테이블을 묶어서 하나의 테이블로 만듦

-- inner join
-- 1. inner join과 on 사용
SELECT * FROM customer inner JOIN orderlist on customer.id = orderlist.customer_id;

-- 2. where로 inner join 사용
SELECT * FROM customer, orderlist where customer.id = orderlist.customer_id;

-- 3. inner join과 on 사용, where 조회조건 추가
SELECT * FROM customer inner JOIN orderlist on customer.id = orderlist.customer_id 
WHERE quantity>=5;

-- 4. where로 inner join 사용, 조회조건 추가
SELECT * FROM customer, orderlist where customer.id = orderlist.customer_id
and quantity>=5;

-- 5. 특정 컬럼만 조회
SELECT orderlist.id,customer.id,customer.name,orderlist.product_name,orderlist.quantity 
FROM orderlist,customer
WHERE customer.id=orderlist.customer_id;

-- 6. 테이블에 별칭 지어서 접근(as)
SELECT c.id, o.customer_id, c.name, o.product_name, o.quantity 
FROM customer as c, orderlist as o
WHERE c.id = o.customer_id;

-- left outer join과 right outer join
SELECT * FROM orderlist LEFT OUTER JOIN customer on orderlist.customer_id=customer.id;
SELECT * FROM orderlist RIGHT OUTER JOIN customer ON orderlist.customer_id=customer.id;

-- natural join
-- 같은 컬럼이 없어서 안됨
SELECT * FROM orderlist NATURAL JOIN customer;