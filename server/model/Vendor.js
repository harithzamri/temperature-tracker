const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VendorSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Temperature: {
    type: Number,
    required: true,
  },
  Company: {
    type: String,
  },
  Symptom: {
    type: String,
    default: "Healthy",
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});

const Vendor = mongoose.model("Vendor", VendorSchema);
module.exports = { Vendor };
