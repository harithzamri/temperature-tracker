import React from "react";
import styles from "./CalendarPick.module.css";
import Calendar from "react-calendar";
import { useState } from "react";

function CalendarPick() {
  const [Beginning, setBeginning] = useState(new Date());
  const [Ending, setEnding] = useState(new Date());

  const onSubmit = (e) => {
    console.log(Beginning, Ending);
  };

  function onChange(nextValue) {
    setBeginning(nextValue);
  }

  function onChangeEnd(nextValue) {
    setEnding(nextValue);
  }

  return (
    <form onSubmit={onSubmit}>
      <Calendar onChange={onChange} value={Beginning} />
      <Calendar onChange={onChangeEnd} value={Ending} />
      <input type="button" onClick={onSubmit} />
    </form>
  );
}

export default CalendarPick;
