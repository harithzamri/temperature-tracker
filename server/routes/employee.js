const express = require("express");
const router = express.Router();
const { Employee } = require("../model/Employee");
const nodemailer = require("nodemailer");

async function main(employeeid, temp, details) {
  let transporter = nodemailer.createTransport({
    host: "SMTP.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: "harith@greatech-group.com",
      pass: "U5kinss0/",
    },
  });

  let info = await transporter.sendMail({
    from: "harith@greatech-group.com",
    to: "gim-ehrt@greatech-group.com", // list of receivers
    subject: "Employee Self Declaration - Medium/High Risk", // Subject line
    text: `${employeeid} with ${temp}°C. ${details}`, // plain text body
    // html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

router.post("/uploadData", (req, res) => {
  const employee = new Employee(req.body);
  let employeeid = req.body.EmployeeId;
  let temp = req.body.Temperature;
  let checked = req.body.Checked;
  let details = req.body.details;
  console.log(checked);

  const filter = { EmployeeId: employeeid };
  const update = { Temperature: temp };

  var date = new Date().toLocaleDateString();
  // console.log(checked.indexOf(1));
  if (checked.indexOf("1") === 0) {
    console.log(false);
  } else {
    main(employeeid, temp, details).catch(console.error);
  }

  Employee.exists({ Date: { $gte: date }, EmployeeId: employeeid }, function (
    err,
    result
  ) {
    if (result) {
      Employee.findOneAndUpdate(filter, update, { new: true }).exec(
        (err, employee) => {
          if (err) {
            console.log(err);
            return res.status(400).send(err);
          } else {
            return res.status(200).json({ success: false, employee });
          }
        }
      );
    } else {
      employee.save((err) => {
        if (err) return res.status(400).json({ success: false, err });
        return res.status(200).json({ success: true });
      });
    }
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

router.get("/getbyDate", (req, res) => {
  var datetime = new Date().toLocaleDateString();

  Employee.find({ Date: { $gte: datetime } })
    .sort({ datefield: -1 })
    .populate("writer")
    .exec((err, employee) => {
      if (err) {
        console.log(err);
        return res.status(400).send(err);
      } else {
        res.status(200).json({ success: true, employee });
        //console.log(employee);
      }
    });
});

router.post("/sortbyDate", (req, res) => {
  let beginingTime = req.body.beginning;
  let endTime = req.body.ending;

  Employee.find({ Date: { $gte: beginingTime, $lt: endTime } })
    .sort({ datefield: -1 })
    .populate("writer")
    .exec((err, employee) => {
      if (err) {
        console.log(err);
        return res.status(400).send(err);
      } else {
        return res.status(200).json({ success: true, employee });
      }
    });
});

module.exports = router;
