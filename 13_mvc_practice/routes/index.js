const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

// index
router.get("/", controller.mainpage);
router.post("/", controller.main);
router.post("/login2", controller.login2);

module.exports = router;
