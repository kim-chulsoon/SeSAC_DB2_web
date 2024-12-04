const { UserInfo } = require("../model/user");
const user = require("../model/user");

exports.mainpage = (req, res) => {
  res.render("index");
};

exports.main = (req, res) => {
  const { id, pw } = req.body;
  const user = UserInfo();

  if (id === user.realId && pw == user.realPw) {
    res.json({ isSuccess: true, id: id });
  } else {
    res.json({ isSuccess: false });
  }
};

exports.login2 = (req, res) => {
  console.log(user.user);
  const users = [];
  const userIds = [];
  const userData = user.split("\n");
  userData.forEach((userLine) => {
    const userInfoArr = userLine.split("//");
    const userObj = {
      id: userInfoArr[0],
      pw: userInfoArr[1],
      name: userInfoArr[2],
    };
    users.push(userObj);
    userIds.push(userInfoArr[0]);
  });
  console.log(users);
  console.log(userIds);
  const idx = userIds.indexOf(req.body.id);
  if (idx >= 0) {
    if (req.body.pw === users[idx].pw) {
      console.log("일치");
      res.send({ isSuccess: true, userName: users[idx].name });
    } else {
      console.log("불일치");
      res.send({ isSuccess: false });
    }
  }
};
