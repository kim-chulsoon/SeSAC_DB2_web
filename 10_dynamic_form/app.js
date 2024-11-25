const express = require("express");
const app = express();
const PORT = 8080;

// 미들웨어 설정
// 뷰 폴더 설정
app.set("view engine", "ejs");
app.set("views", "./views");

// body-parser 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//api
app.get("/", (req, res) => {
  res.render("index");
});

// ajax GET
app.get("/ajax", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// ajax POST
app.post("/ajax", (req, res) => {
  // body-parser 설정을 해야 req.body를 읽을 수 있음
  console.log(req.body);
  res.send(req.body);
});

// axios GET
app.get("/axios", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// axios POST
app.post("/axions", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// fetch GET
app.get("/fetch", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// fetch POST
app.post("/fetch", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// 외부 api 사용하기
app.get("/api", (req, res) => {
  console.log(req.query);
  res.render("api");
});

// practice1
app.get("/practice1", (req, res) => {
  console.log(req.query);
  res.render("practice/practice1");
});

app.get("/axios-practice1", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// practice2
const RealID = "banana";
const realPW = "4321";

app.get("/practice2", (req, res) => {
  console.log(req.query);
  res.render("practice/practice2");
});

app.post("/practice", (req, res) => {
  console.log(req.body);
  if (RealID === req.body.userId && realPw === req.body.userPw) {
    res.send({ isSuccess: true, userId: req.body.userId });
  } else {
    res.send({ isSuccess: false });
  }
  // res.send("응답완료");
});

// port
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
