const express = require("express");
const db = require("./models/index");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

// 미들웨어
app.set("view engine", "ejs");
app.set("views", "./views");

// body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/static", express.static(__dirname + "/static"));

// 라우터
const indexRouter = require("./routes/index");
const { FORCE } = require("sequelize/lib/index-hints");
app.use("/", indexRouter);

// 404
app.get("*", (req, res) => {
  res.render("404");
});

db.sequelize.sync({ FORCE: false }).then((result) => {
  // console.log(result);
  console.log("db연결 성공");
  console.log("----------------------------------");
  // PORT
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
