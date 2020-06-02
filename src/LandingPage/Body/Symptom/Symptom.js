import React from "react";
import styles from "./Symptom.module.css";

function Symptom() {
  return (
    <div>
      <div className={styles["checkbox"]}>
        <label className="checkbox">
          <input type="checkbox" />
          Cough
        </label>
        <label className="checkbox">
          <input type="checkbox" />
          Fever
        </label>
        <label className="checkbox">
          <input type="checkbox" />
          Difficult To Breath
        </label>
      </div>
    </div>
  );
}

export default Symptom;
