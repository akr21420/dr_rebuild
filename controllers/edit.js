const Patient = require("../models/patient");

const renderView = (req, res) => {
  res.render("patient_edit");
};

const getPatient = (req, res) => {
  let id = req.body.PatientId;
  Patient.findOne({ id: id })
    .lean()
    .then((result) => {
      console.log(result);
      res.render("patient_edit_landing", { data: result });
    })
    .catch((err) => {
      console.log(err);
      res.render("patient_edit_landing");
    });
};
const updatePatient = (req, res) => {
  console.log(req.body);
  let id = req.body.PatientId;
  let name = req.body.Patientname;
  let phone = req.body.Phone;
  let email = req.body.email;
  let add1 = req.body.add1;
  let add2 = req.body.add2;
  let age = req.body.age;
  let dr = req.body.dr;
  let query = { id: id };
  Patient.updateOne(query, {
    $set: {
      id: id,
      name: name,
      phone: phone,
      email: email,
      add1: add1,
      add2: add2,
      age: age,
      dr: dr,
    },
  })
    .then((result) => {
      console.log(result);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/");
    });
};

module.exports = { renderView, getPatient, updatePatient };
