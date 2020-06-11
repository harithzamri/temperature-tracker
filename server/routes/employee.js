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

router.get("/employee_by_id", (req, res) => {
  let employeeIds = req.query.id;

  //we need to find the product information that belong to product Id
  Employee.find({ EmployeeId: { $in: employeeIds } })
    .sort({ _id: -1 })
    .populate("writer")
    .exec((err, employee) => {
      if (err) {
        console.log(err);
        return res.status(400).send(err);
      } else {
        res.status(200).json({ success: true, employee });
      }
    });
});
module.exports = router;
