// TODO: DB(mysql) 연결
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "sesac",
  password: "1234",
  database: "sesac",
});

// TODO: 모델 코드

// 조회
exports.getUsers = (cb) => {
  conn.query(`select * from user`, (err, rows) => {
    if (err) throw err;

    console.log("User 테이블 전체 조회", rows);
    cb(rows);
  });
};

// 특정 데이터 조회
exports.getUser = (id, cb) => {
  conn.query(`select * from user where id = ${id}`, (err, rows) => {
    if (err) throw err;

    console.log("User 테이블 한 개 조회", rows);
    cb(rows[0]);
  });
};

// 데이터 등록
exports.postUser = (data, cb) => {
  conn.query(
    `insert into user value(null, "${data.userid}", "${data.pw}", "${data.name}")`,
    (err, rows) => {
      if (err) throw err;
      console.log("model post", rows);
      cb(rows.insertId);
    }
  );
};
