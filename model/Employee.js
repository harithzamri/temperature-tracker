const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  EmployeeId: {
    type: Number,
    required: true,
  },
  Temperature: {
    type: Number,
    required: true,
  },
  Symptom: {
    type: String,
    default: "Healthy",
  },
  Shift: {
    type: String,
    default: "Morning",
  },
});

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = { Employee };
