const express = require("express");
const router = express.Router();
const {
  renderAdd,
  renderEdit,
  renderDelete,
  deletePatient,
} = require("../controllers/db");

router.get("/add", renderAdd);
router.get("/edit", renderEdit);
router.get("/del", renderDelete);
router.post("/del", deletePatient);

module.exports = router;
