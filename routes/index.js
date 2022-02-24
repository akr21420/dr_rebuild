const express = require("express");
const { renderhome } = require("../controllers/index");
const router = express.Router();

router.get("/", renderhome);

module.exports = router;
