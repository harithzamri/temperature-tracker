const express = require("express");
const router = express.Router();
const { Employee } = require("../model/Employee");

router.post("/uploadData", (req, res) => {
  const employee = new Employee(req.body);

  employee.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

router.get("/employee_id", (req, res) => {
  Employee.find({ _employeeid: { $in: employeeId } })
    .populate("EmployeeId")
    .exec((err, employee) => {
      if (err) return req.status(400).send(err);
      return res.status(200).send(employee);
    });
});

module.exports = router;
