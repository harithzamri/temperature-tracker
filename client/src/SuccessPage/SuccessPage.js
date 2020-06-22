import React, { useEffect } from "react";
import styles from "./SuccessPage.module.css";
import axios from "axios";

function SuccessPage() {
  useEffect(() => {
    axios
      .get("http://localhost:5000/employee/checkexisting")
      .then((response) => {
        console.log(response.data.employee);
      });
  }, []);

  return (
    <div className={styles["success"]}>
      <span className="icon has-text-success">
        <i className="fas fa-2x fa-check-square"></i>
      </span>
      <h2 className={`subtitle is-2 ${styles["title"]}`}>Thank You</h2>
      <h5 className="title is-5">Form has been successfully submitted</h5>
    </div>
  );
}

export default SuccessPage;
