import React from "react";
import styles from "./Result.module.css";
function Result() {
  return (
    <div className={styles["result"]}>
      <h3 className="subtitle is -3">
        <strong>Temperature</strong>
      </h3>
      <h6 className="subtitle is-6">Time</h6>
      <h6 className="subtitle is-6">Date</h6>
      <hr />
    </div>
  );
}

export default Result;
