import React from "react";
import styles from "./Result.module.css";
import dateFormat from "dateformat";
function Result(props) {
  const properdate = new Date(props.date).toLocaleDateString();
  const time = new Date(props.date).toLocaleTimeString();

  return (
    <div className={styles["result"]}>
      <h3 className="subtitle is -3">
        <strong>{props.temperature} °C </strong>
      </h3>
      <h6 className="subtitle is-6">{properdate}</h6>
      <h6 className="subtitle is-6">{time}</h6>
      <hr />
    </div>
  );
}

export default Result;
