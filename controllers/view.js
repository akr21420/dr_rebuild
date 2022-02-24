const Patient = require("../models/patient");

const renderView = (req, res) => {
  res.render("patient_view");
};

const getPatient = (req, res) => {
  let id = req.body.PatientId;
  Patient.findOne({ id: id })
    .lean()
    .then((result) => {
      console.log(result);
      res.render("patient_view_landing", { data: result });
    })
    .catch((err) => {
      console.log(err);
      res.render("patient_view_landing");
    });
};
module.exports = { renderView, getPatient };
