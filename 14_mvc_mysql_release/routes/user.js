// TODO: 라우트 설정
const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

// GET
router.get("/", controller.main);
router.get("/signup", controller.signUp);
router.get("/signin", controller.signIn);
router.get("/profile", controller.profile);

// POST
router.post("/signup", controller.signUpPost);

module.exports = router;
