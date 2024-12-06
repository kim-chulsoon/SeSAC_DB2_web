// TODO: 컨트롤러 코드
const User = require("../model/User");

// GET main
exports.main = (req, res) => {
  res.render("index");
};

// GET signup
exports.signUp = (req, res) => {
  res.render("signup");
};

// GET signin
exports.signIn = (req, res) => {
  res.render("signin");
};

// GET profile
exports.profile = (req, res) => {
  res.render("profile");
};

// POST signup
exports.signUpPost = (req, res) => {
  console.log(req.body);
  User.postUser(req.body, (result) => {
    console.log("Cuer.js", result);
    res.send({
      userid: req.body.userid,
      pw: req.body.pw,
      name: req.body.name,
    });
  });
};
