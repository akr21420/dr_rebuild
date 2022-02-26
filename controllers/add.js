const Patient = require("../models/patient");
const renderAdd = function (req, res) {
  console.log(imgurl);
  res.render("patient_add", { data: {} });
};

const addPatient = (req, res) => {
  console.log(imgurl);
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
  data.img.push(imgurl);
  console.log(data);
  data
    .save()
    .then(() => {
      console.log("Saved");
      res.redirect("/img");
    })
    .catch((err) => {
      console.log(err.message);
      res.render("patient_add", { data: err });
    });
};
module.exports = { renderAdd, addPatient };
