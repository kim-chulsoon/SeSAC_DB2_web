const express = require("express");
const app = express();
const PORT = 8080;

// 미들웨어
app.set("view engine", "ejs");
app.set("views", "./views");

// body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const comments = [
  { id: 1, userid: "apple", date: "2024-10-23", comment: "안녕하세요" },
  { id: 2, userid: "banana", date: "2024-10-24", comment: "반갑습니다" },
  { id: 3, userid: "cocoa", date: "2024-10-25", comment: "배고파요" },
  { id: 4, userid: "donuts", date: "2024-10-26", comment: "집가고싶어요" },
];

// index
app.get("/", (req, res) => {
  res.render("index");
});

// comments
app.get("/comments", (req, res) => {
  console.log(comments);
  res.render("comments", { commentInfos: comments });
});

// comment
app.get("/comment/:id", (req, res) => {
  console.log(req.params);
  const commentId = req.params.id;
  console.log("commentId", commentId);
  console.log(comments[commentId - 1]);
  if (commentId < 1 || commentId > comments.length) {
    res.render("404");
  }
  if (isNaN(commentId)) {
    res.render("404");
  }

  res.render("comment", { commentInfo: comments[commentId - 1] });
});

// 404 error
// 반드시 맨 마지막 라우트로 선언
app.get("*", (req, res) => {
  res.render("404");
});

// port
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
