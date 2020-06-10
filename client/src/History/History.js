import React, { useState, useEffect } from "react";
import NavBar from "../LandingPage/NavBar/NavBar";
import Result from "./Result/Result";
import Axios from "axios";
import { Link } from "react-router-dom";
import styles from "./History.module.css";

function History(props) {
  const EmployeeId = props.match.params.employeeId;

  const [Details, setDetails] = useState([]);

  useEffect(() => {
    Axios.get(
      `http://localhost:5000/employee/employee_by_id?id=${EmployeeId}`
    ).then((response) => {
      if (response.data.success) {
        var data = [];
        var length = 3;
        for (let i = 0; i < length; i++) {
          data.push(response.data.employee);
        }

        console.log(data);
        setDetails(response.data.employee);
      } else {
        alert("failed to get employeedetails");
      }
    });
  }, []);
  return (
    <div className={styles["history"]}>
      <Link to="/">
        <NavBar />
      </Link>
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
