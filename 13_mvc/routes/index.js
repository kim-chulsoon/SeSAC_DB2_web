const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

// index
router.get("/", controller.main);

// comments
router.get("/comments", controller.comments);

// comment
router.get("/comment/:id", controller.comment);

module.exports = router;
