const express = require("express");
const employeeRouter = express.Router();
const Employee = require("../model/Employee");

//Create
Employee.post("/", (req, res) => {
  const employeee = new Employee(req.body);
  employeee.save((err, document) => {
    if (err)
      res.status(500).json({
        message: {
          msgBody: "Unable to create data",
          msgError: true,
        },
      });
    else {
      res.status(200).json({
        message: {
          msgBody: "Successfully add the data",
          msgError: false,
        },
      });
    }
  });
});

module.exports = employeeRouter;
