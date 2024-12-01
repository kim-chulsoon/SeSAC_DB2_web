const { UserInfo } = require("../model/user");

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
