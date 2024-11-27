const express = require("express");
const multer = require("multer");
const { userInfo } = require("os");
const path = require("path");
const { title } = require("process");
const app = express();
const PORT = 8080;

// 미들웨어
app.set("view engine", "ejs");
app.set("views", "./views");

// body-parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// staic
app.use("/static", express.static(__dirname + "/static"));
app.use("/uploads", express.static(__dirname + "/uploads"));

// index
app.get("/", (req, res) => {
  res.render("index");
});

// multer
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, res, done) {
      done(null, "uploads/");
    },
    filename: function (req, file, done) {
      const extension = path.extname(file.originalname);
      done(null, req.body.userid + Date.now + extension);
    },
  }),

  limits: { fieldSize: 5 * 1024 * 1024 },
});

// upload
app.post("/upload", upload.single("profile"), (req, res) => {
  console.log(req.body);
  /* 
  id: 'dd',
  pw: 'asdf',
  name: 'dddd',
  age: '7'
   */
  console.log(req.file);
  /*
  fieldname: 'profile',
  originalname: 'q.jpg',
  encoding: '7bit',
  mimetype: 'image/jpeg',
  destination: 'uploads/',
  filename: 'undefinedfunction now() { [native code] }.jpg',
  path: 'uploads\\undefinedfunction now() { [native code] }.jpg',
  size: 542883
  */
  res.render("profile", {
    ...req.body,
    src: req.file.path,
  });
});

// port
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
