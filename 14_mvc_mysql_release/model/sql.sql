show DATABASEs;

use sesac;

drop table user;

create table user(
    id int not null AUTO_INCREMENT PRIMARY KEY,
    userid VARCHAR(20) not null,
    name VARCHAR(10) not null,
    pw VARCHAR(20) not NULL
);

desc user;

CREATE user 'sesac'@'%' IDENTIFIED by '1234';

SELECT * FROM user;