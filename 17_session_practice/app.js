const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));

// 바디파서
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 세션 설정, 10분 뒤 세션 종료하도록
app._router.use(
  session({
    secret: "1234",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 10,
      httpOnly: true,
    },
  })
);

app.get("/", (req, res) => {
  // 로그인이 안된 유저 > {isLogin:false}
  // 로그인이 된 유저 > {isLogin:true, user:유저}
  console.log("get /", req.session);
  const user = req.session.user;
  if (req.session.user) {
    res.render("index", { isLogin: true, user: user });
  } else {
    res.render("index", { isLogin: false });
  }
});

app.get("/login", (req, res) => {
  const user = req.session.user;
  if (user) {
    res.redirect("/");
  } else {
    res.render("login");
  }
});

const userInfo = {
  userId: "cocoa",
  userPw: "1234",
};

// POST /login
app.post("/login", (req, res) => {
  // 실제 로그인 진행
  // 세션 연결
  // 세션의 user라는 키를 추가하여 userId값을 value로 전달
  if (userInfo.userId === req.body.id && userInfo.userPw === req.body.pw) {
    req.session.user = req.body.id;
    console.log("post /login", req.session);
    res.redirect("/");
  } else {
    res.send(`
      <script>
      alert('아이디 또는 비밀번호가 일치하지 않습니다');
      document.location.href='/login';
      </script>
      `);
  }
});

// GET /logout
app.get("/logout", (req, res) => {
  // 실제 로그아웃 진행
  // 세션 삭제
  console.log("logout", req.session);
  const user = req.session.user;
  if (user) {
    req.session.destroy((err) => {
      if (err) throw err;
    });
    res.redirect("/");
  } else {
    res.send(`
      <script>
        alert('이미 세션이 만료되었습니다');
        document.location.href='/';
      </script>
      `);
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
