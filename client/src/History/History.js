import React, { useState, useEffect } from "react";
import NavBar from "../LandingPage/NavBar/NavBar";
import Result from "./Result/Result";
import axios from "axios";
import styles from "./History.module.css";

function History(props) {
  const EmployeeId = props.match.params.employeeId;

  const [Details, setDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/employee/employee_by_id?id=${EmployeeId}`)
      .then((response) => {
        if (response.data.success) {
          console.log(response.data.employee);
          setDetails(response.data.employee);
        } else {
          alert("failed to get employeedetails");
        }
      });
  }, []);
  return (
    <div className={styles["history"]}>
      <NavBar />
      <div>Employee ID: {EmployeeId}</div>
      <hr />

      <div>
        <span>
          <strong>Your Past Temperature</strong>
        </span>

        {Details.map((details) => (
          <Result temperature={details.Temperature} date={details.Date} />
        ))}
      </div>
    </div>
  );
}

export default History;
