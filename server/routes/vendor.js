const express = require("express");
const router = express.Router();
const { Vendor } = require("../model/Vendor");

router.post("/uploadVendor", (req, res) => {
  //save all the data we got from the client into the DB
  const vendor = new Vendor(req.body);

  vendor.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

router.get("/getVendor", (req, res) => {
  // var datetime = new Date().toLocaleDateString();

  Vendor.find({})
    .populate("writer")
    .exec((err, vendor) => {
      if (err) {
        console.log(err);
        return res.status(400).send(err);
      } else {
        res.status(200).json({ success: true, vendor });
        //console.log(employee);
      }
    });
});

router.post("/sortbyDateVendor", (req, res) => {
  let beginingTime = req.body.beginning;
  let endTime = req.body.ending;

  Vendor.find({ Date: { $gte: beginingTime, $lt: endTime } })
    .sort({ datefield: -1 })
    .populate("writer")
    .exec((err, vendor) => {
      if (err) {
        console.log(err);
        return res.status(400).send(err);
      } else {
        return res.status(200).json({ success: true, vendor });
      }
    });
});

module.exports = router;
