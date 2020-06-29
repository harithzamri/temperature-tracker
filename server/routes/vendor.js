const express = require("express");
const router = express.Router();
const { Vendor } = required("..model/Vendor");

router.post("/uploadVendorData", (req, res) => {
  const vendor = new Vendor(req.body);

  vendor.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});
