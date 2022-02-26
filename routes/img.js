const express = require("express");
const router = express.Router();
const { renderAdd } = require("../controllers/add");
const { upload } = require("../controllers/img");
router.get("/", (req, res) => {
  res.render("patient_img");
});
router.post("/", upload.single("picture"), async (req, res) => {
  imgurl = req.file.path;
  //   renderAdd();
  res.render("patient_add", { data: {} });
});
module.exports = router;
