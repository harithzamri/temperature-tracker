import React, { useState, useEffect } from "react";
import NavBar from "../LandingPage/NavBar/NavBar";
import Result from "./Result/Result";
import Axios from "axios";
import { Link } from "react-router-dom";
import styles from "./History.module.css";
import { CSVLink } from "react-csv";
function History(props) {
  const EmployeeId = props.match.params.employeeId;

  const [Details, setDetails] = useState([]);

  useEffect(() => {
    Axios.get(
      `http://localhost:5000/employee/employee_by_id?id=${EmployeeId}`
    ).then((response) => {
      if (response.data.success) {
        console.log("response", response.data.employee);
        setDetails(response.data.employee);
      } else {
        alert("failed to get employeedetails");
      }
    });
  }, []);

  const data = Details;
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

        {Details.slice(0, 3).map((details) => (
          <Result temperature={details.Temperature} date={details.Date} />
        ))}
      </div>
      <CSVLink data={data}>Download me</CSVLink>;
    </div>
  );
}

export default History;
