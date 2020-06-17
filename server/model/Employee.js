const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  EmployeeId: {
    type: String,
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
  Date: {
    type: Date,
    default: Date.now,
  },
});

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = { Employee };
