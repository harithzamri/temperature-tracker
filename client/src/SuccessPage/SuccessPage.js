import React from "react";
import styles from "./SuccessPage.module.css";
import { withRouter } from "react-router-dom";

function SuccessPage(props) {
  const handleToggle = () => {
    const EmployeeId = props.location.EmployeeId;
    props.history.push(`/employee/${EmployeeId}`);
  };

  return (
    <div className={styles["success"]}>
      <span className="icon has-text-success">
        <i className="fas fa-2x fa-check-square"></i>
      </span>
      <h2 className={`subtitle is-2 ${styles["title"]}`}>Thank You</h2>
      <h5 className="title is-5">Form has been successfully submitted</h5>
      <button className="button is-primary" onClick={handleToggle}>
        <span>View Record History</span>
        <span className="icon">
          <i className="fas fa-arrow-right"></i>
        </span>
      </button>
    </div>
  );
}

export default withRouter(SuccessPage);
