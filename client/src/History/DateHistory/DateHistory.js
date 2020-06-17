import React, { useEffect, useState } from "react";
import axios from "axios";
import { CSVLink } from "react-csv";
import styles from "./DateHistory.module.css";
import CalendarPick from "./CalendarPick/CalendarPick";
import load from "../../assets/images/loading.gif";

function DateHistory() {
  const [DateHistory, setDateHistory] = useState([]);

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

  const generateReport = DateHistory.length ? (
    <div className={styles["daily-report"]}>
      <CSVLink data={DateHistory}>Generate Daily Report</CSVLink>
    </div>
  ) : (
    <figure className="image is-96x96">
      <img src={load} />
    </figure>
  );

  return (
    <div className={styles["date-align"]}>
      {generateReport}
      <CalendarPick />
    </div>
  );
}

export default DateHistory;
