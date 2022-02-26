const mongoose = require("mongoose");
const uniqueValid = require("mongoose-unique-validator");
const patientSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
    },
    add1: {
      type: String,
      required: true,
    },
    add2: {
      type: String,
    },
    dr: {
      type: Number,
      required: true,
    },
    img: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

patientSchema.plugin(uniqueValid);
module.exports = mongoose.model("Patient", patientSchema);
