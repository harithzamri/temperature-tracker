import React from "react";
import styles from "./Body.module.css";

function Body() {
  return (
    <div>
      <form>
        <label className="label">EmployeeID</label>
        <div className="control">
          <input className="input" type="text" placeholder="Employee ID" />
        </div>
        <label className="label">Temperature</label>
        <div className="control">
          <input className="input" type="number" placeholder="Temperature" />
        </div>
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
        <div>
          <button className="button is-primary">
            <span className="icon is-small">
              <i className="fas fa-check"></i>
            </span>
            <span>Save</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Body;
