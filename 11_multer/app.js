const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8080;

// 미들웨어 설정
// 뷰 폴더 설정
app.set("view engine", "ejs");
app.set("views", "./views");

// body-parser 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// static 폴더 설정
app.use("/static", express.static(__dirname + "/public"));
app.use("/upload", express.static(__dirname + "/upload"));

// multer 설정
const upload = multer({
  dest: "upload/",
});

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, res, done) {
      done(null, "upload/"); // 어디에 저장될지
    },
    filename: function (req, file, done) {
      // const extension = path.extname(파일이름.확장자) > 확장자만 리턴
      const extension = path.extname(file.originalname); // .png, .webp etc...

      //   path.basename(파일이름.확장자, 확장자) > 파일 이름만 리턴
      done(
        null,
        path.basename(file.originalname, extension) + Date.now() + extension
      );

      console.log("path.basename", path.basename(file.originalname, extension));
      console.log("path.extname", path.extname(file.originalname));
    },
  }),

  limits: { fieldSize: 5 * 1024 * 1024 }, //5mb
});

// index
app.get("/", (req, res) => {
  res.render("index");
});

// upload
app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  /* 
  {
  fieldname: 'userfile', // 폼 내부에 정의한 name값
  originalname: 'cat.jpg', // 원본 파일명
  encoding: '7bit', // 파일 인코딩 타입
  mimetype: 'image/jpeg', // 파일  타입
  destination: 'upload/', // 파일 저장 경로
  filename: '377fd6e5b714965cf59964fd1b72ff1e', // 저장된 파일명
  path: 'upload\\377fd6e5b714965cf59964fd1b72ff1e', // 업로드된 파일 전체 경로
  size: 44869 // 파일크기(byte)
}
  */
  res.send("응답");
});

// 하나의 input에 여러 개의 파일 업로드
app.post("/upload/array", uploadDetail.array("multifiles"), (req, res) => {
  //   console.log(req.file); //undifined
  console.log(req.files); // 파일 여러개일 때
  console.log(req.body);
  /* 
  {
    fieldname: 'multifiles',
    originalname: 'little-boom.jpg',
    encoding: '7bit',
    mimetype: 'image/jpeg',
    destination: 'upload/',
    filename: 'little-boom1732518388738.jpg',
    path: 'upload\\little-boom1732518388738.jpg',
    size: 53577
  },
  {
    fieldname: 'multifiles',
    originalname: 'fish.jpg',
    encoding: '7bit',
    mimetype: 'image/jpeg',
    destination: 'upload/',
    filename: 'fish1732518388745.jpg',
    path: 'upload\\fish1732518388745.jpg',
    size: 61489
  }
  */
  res.send("업로드 완료");
});

// 여러개의 input에 파일 업로드
app.post(
  "/upload/files",
  uploadDetail.fields([
    { name: "file1" },
    { name: "file2" },
    { name: "file3" },
  ]),
  (req, res) => {
    console.log(req.files);
    console.log(req.body);
    /* 
{
  file1: [
    {
      fieldname: 'file1',
      originalname: 'city.jpg',
      encoding: '7bit',
      mimetype: 'image/jpeg',
      destination: 'upload/',
      filename: 'city1732518952509.jpg',
      path: 'upload\\city1732518952509.jpg',
      size: 83478
    }
  ],
  file2: [
    {
      fieldname: 'file2',
      originalname: 'fish.jpg',
      encoding: '7bit',
      mimetype: 'image/jpeg',
      destination: 'upload/',
      filename: 'fish1732518952512.jpg',
      path: 'upload\\fish1732518952512.jpg',
      size: 61489
    }
  ],
  file3: [
    {
      fieldname: 'file3',
      originalname: 'deer.jpg',
      encoding: '7bit',
      mimetype: 'image/jpeg',
      destination: 'upload/',
      filename: 'deer1732518952515.jpg',
      path: 'upload\\deer1732518952515.jpg',
      size: 55678
    }
  ]
}
    */
    res.send("업로드 완료");
  }
);

// 동적 폼 파일 업로드
app.post("/dynamicUpload", uploadDetail.single("dynamicFile"), (req, res) => {
  console.log(req.file);
  res.send(req.file);
});

// port
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
