import React, { useEffect, useState } from "react";
import axios from "axios";
import { CSVLink } from "react-csv";

function DateHistory() {
  const [DateHistory, setDateHistory] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/employee/getbyDate").then((response) => {
      if (response.data.success) {
        console.log(response.data.employee);
      } else {
        alert("failed to get data from database");
      }
    });
  }, []);

  return <div>DateHistory</div>;
}

export default DateHistory;
