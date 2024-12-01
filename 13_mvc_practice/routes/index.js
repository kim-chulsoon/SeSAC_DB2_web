const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

// index
router.get("/", controller.mainpage);
router.post("/", controller.main);

module.exports = router;
