const express = require("express");
const router = express.Router();
const {
  renderView,
  getPatient,
  updatePatient,
} = require("../controllers/edit");

router.get("/", renderView);
router.post("/", getPatient);
router.post("/update", updatePatient);
module.exports = router;
