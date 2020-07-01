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

module.exports = router;
