import React, { useState, useEffect } from "react";
import NavBar from "../LandingPage/NavBar/NavBar";
import Result from "./Result/Result";
import axios from "axios";

function History(props) {
  const EmployeeId = props.match.params.employeeId;

  const [Details, setDetails] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/employee/getEmployee").then((response) => {
      if (response.data.success) {
        console.log(response.data.employee);
      } else {
        alert("failed to get employeedetails");
      }
    });
  }, []);
  return (
    <div>
      <NavBar />
      <div>Employee ID: {EmployeeId}</div>
      <hr />

      <div>
        <span>
          <strong>Your Past Temperature</strong>
        </span>
        <Result />
        <Result />
      </div>
    </div>
  );
}

export default History;
