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

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
