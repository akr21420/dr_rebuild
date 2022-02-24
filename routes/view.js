const express = require("express");
const router = express.Router();
const { renderView, getPatient } = require("../controllers/view");

router.get("/", renderView);
router.post("/", getPatient);
module.exports = router;
