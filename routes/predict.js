const express = require("express");
const router = express.Router();
const { sendData,delImg } = require("../controllers/predict");
router.get("/", sendData);
router.get("/nosave",delImg)
module.exports = router;
