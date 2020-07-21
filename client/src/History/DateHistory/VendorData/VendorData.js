import React from "react";
import styles from "./VendorData.module.css";
import { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";

function VendorData() {
  const [Vendor, setVendor] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/vendor/getVendor").then((response) => {
      if (response.data.success) {
        console.log("vendor", response.data.vendor);
      }
    });
  }, []);
  return <div>VendorData</div>;
}

export default VendorData;
