import React from "react";
import styles from "./CalendarPick.module.css";
import Calendar from "react-calendar";
import axios from "axios";
import { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import dateFormat from "dateformat";
import load from "../../../assets/images/loading.gif";

function CalendarPick(props) {
  const [Beginning, setBeginning] = useState(new Date());
  const [Ending, setEnding] = useState(new Date());
  const [Result, setResult] = useState([]);

  const properDateBeginning = dateFormat(Beginning, "dS mmmm");
  const properDateEnding = dateFormat(Ending, "dS mmmm");
  const onSubmit = () => {
    const variable = {
      beginning: Beginning,
      ending: Ending,
    };

    axios
      .post("http://localhost:5000/employee/sortbyDate", variable)
      .then((response) => {
        if (response.data.success) {
          setResult(response.data.employee);
          console.log(response.data.employee);
        } else {
          alert("Failed to get the current calendar");
        }
      });
  };

  const appearbutton = Result.length ? (
    <CSVLink data={Result}>
      Report Generated from {properDateBeginning} to {properDateEnding}
    </CSVLink>
  ) : (
    <figure className="image is-96x96">
      <img src={load} alt="figure" />
    </figure>
  );

  function onChange(nextValue) {
    setBeginning(nextValue);
  }

  function onChangeEnd(nextValue) {
    setEnding(nextValue);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className={styles["calendar"]}>
          <h2>Generate Report by Date</h2>
          <Calendar
            // className={styles["calendar"]}
            onChange={onChange}
            value={Beginning}
          />
          <Calendar onChange={onChangeEnd} value={Ending} />

          <button
            type="button"
            className={`button is-primary ${styles["button"]}`}
            onClick={onSubmit}
          >
            Generate Employee Report
          </button>

          {appearbutton}
        </div>
      </form>
    </div>
  );
}

export default CalendarPick;
