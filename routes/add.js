const express = require("express");
const router = express.Router();
const { renderAdd, addPatient } = require("../controllers/add");

router.get("/", renderAdd);
router.post("/", addPatient);
module.exports = router;
