const Patient = require("../models/patient");
const renderAdd = (req, res) => {
  res.render("patient_add",{data:{}});
};

const renderEdit = (req, res) => {
  res.render("patient_edit");
};

const renderDelete = (req, res) => {
  res.render("patient_delete");
};

const deletePatient = (req, res) => {
  let id = req.body.PatientId;
  let query = { id: id };
  Patient.deleteOne(query)
    .then(() => {
      console.log("deleted");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { renderAdd, renderEdit, renderDelete, deletePatient };
