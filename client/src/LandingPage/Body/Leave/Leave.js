import React, { useState } from "react";
import styles from "./Leave.module.css";

function Leave(props) {
  const [Leave, setLeave] = useState("None");
  const leave = [
    { label: "None", value: "None" },
    { label: "Annual Leave", value: "AL" },
    { label: "Emergency Leave", value: "EL" },
    { label: "Medical Leave", value: "MC" },
  ];

  const onLeaveChange = (event) => {
    setLeave(event.target.value);
    props.leave(Leave);
    // console.log(Leave);
  };

  return (
    <div className={styles["leaves"]}>
      <label className="label">Leave</label>
      <div className="select">
        <select onChange={onLeaveChange}>
          {leave.map((item) => (
            <option key={item.label} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Leave;
