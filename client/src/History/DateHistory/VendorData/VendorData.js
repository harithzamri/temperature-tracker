import React from "react";
import styles from "./VendorData.module.css";
import { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import { CSVLink } from "react-csv";

function VendorData() {
  const [Vendor, setVendor] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/vendor/getVendor").then((response) => {
      if (response.data.success) {
        console.log("vendor", response.data.vendor);
        setVendor(response.data.vendor);
      }
    });
  }, []);
  return <CSVLink data={Vendor}>Vendor Data</CSVLink>;
}

export default VendorData;
