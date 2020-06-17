import React, { useEffect } from "react";
import styles from "./CalendarPick.module.css";
import Calendar from "react-calendar";
import axios from "axios";
import { useState } from "react";

function CalendarPick() {
  const [Beginning, setBeginning] = useState(new Date());
  const [Ending, setEnding] = useState(new Date());

  const onSubmit = () => {
    const variable = {
      beginning: Beginning,
      ending: Ending,
    };

    axios
      .post("http://localhost:5000/employee/sortbyDate", variable)
      .then((response) => {
        if (response.data.success) {
          console.log(response.data.employee);
        } else {
          alert("Failed to get the current calendar");
        }
      });
  };

  function onChange(nextValue) {
    setBeginning(nextValue);
  }

  function onChangeEnd(nextValue) {
    setEnding(nextValue);
  }

  return (
    <form onSubmit={onSubmit}>
      <Calendar
        // className={styles["calendar"]}
        onChange={onChange}
        value={Beginning}
      />
      <Calendar
        className={styles["calendar"]}
        onChange={onChangeEnd}
        value={Ending}
      />
      <input type="button" onClick={onSubmit} />
    </form>
  );
}

export default CalendarPick;
