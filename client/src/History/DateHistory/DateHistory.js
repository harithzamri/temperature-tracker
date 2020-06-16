import React, { useEffect, useState } from "react";
import axios from "axios";
import { CSVLink } from "react-csv";
import "./DateHistory.css";
import CalendarPick from "./CalendarPick/CalendarPick";

function DateHistory() {
  const [DateHistory, setDateHistory] = useState([]);
  //console.log(new Date("2020-06-14T23:24:45.581Z").toLocaleDateString());
  useEffect(() => {
    axios.get("http://localhost:5000/employee/getbyDate").then((response) => {
      if (response.data.success) {
        console.log(response.data.employee);
        setDateHistory(response.data.employee);
      } else {
        alert("failed to get data from database");
      }
    });
  }, []);

  return (
    <div className="date-align">
      <CSVLink data={DateHistory}>Generate Daily Report</CSVLink>
      <CalendarPick />
    </div>
  );
}

export default DateHistory;
