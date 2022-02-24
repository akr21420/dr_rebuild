const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Patient = require("../models/patient");
const handleErr = (err, res) => {
  res.status(500).contentType("text/plain").end("Something went wrong!");
};
const upload = multer({
  dest: "../upload/",
});
const renderAdd = function (req, res) {
  res.render("patient_add", { data: {} });
};
const addImg = (req, res) => {
  upload.single("file");
  const temp = req.file.path;
  const target = path.join(__dirname, "../tmp/upload/");
  if (
    path.extname(req.file.originalname).toLowerCase() == "png" ||
    path.extname(req.file.originalname).toLowerCase() == "jpg"
  ) {
    fs.rename(temp, target, (err) => {
      if (err) return handleErr(err, res);
      res.status(200).contentType("text/plain").end("Uploaded");
    });
  } else {
    fs.unlink(temp, (err) => {
      if (err) return handleErr(err, res);

      res.status(403).contentType("text/plain").end("Only png or jpg");
    });
  }
};
const addPatient = (req, res) => {
  console.log("Function called");
  let id = req.body.PatientId;
  let name = req.body.Patientname;
  let phone = req.body.Phone;
  let email = req.body.email;
  let add1 = req.body.add1;
  let add2 = req.body.add2;
  let age = req.body.age;
  let dr = req.body.dr;
  let data = new Patient({
    id,
    name,
    age,
    phone,
    email,
    add1,
    add2,
    dr,
  });
  console.log(data);
  data
    .save()
    .then(() => {
      console.log("Saved");
      res.redirect("/add");
    })
    .catch((err) => {
      console.log(err.message);
      res.render("patient_add", { data: err });
    });
};
module.exports = { renderAdd, addPatient };
