import React, { useState } from "react";
import NavBar from "../LandingPage/NavBar/NavBar";
import styles from "./Check.module.css";
import { withRouter } from "react-router-dom";

function Check(props) {
  const [EmployeeId, setEmployeeId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(EmployeeId);
    props.history.push(`/employee/${EmployeeId}`);
  };

  return (
    <div className={styles["check"]}>
      <NavBar />
      <h3>Check Past History</h3>
      <form className={styles["form"]} onSubmit={handleSubmit}>
        <input
          className="input"
          placeholder="Employee ID"
          onChange={(e) => setEmployeeId(e.target.value)}
        />
        <div className={`buttons ${styles["button-display"]}`}>
          <button className="button is-fullwidth is-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default withRouter(Check);
