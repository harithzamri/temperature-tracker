import React from "react";
import styles from "./SuccessPage.module.css";

function SuccessPage() {
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
