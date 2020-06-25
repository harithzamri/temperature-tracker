import React from "react";
import styles from "./LeaveComponent.module.css";

function LeaveComponent(props) {
  const leave = [
    { label: "None", value: "None" },
    { label: "Annual Leave", value: "AL" },
    { label: "Emergency Leave", value: "EL" },
    { label: "Medical Leave", value: "MC" },
  ];

  // const onLeaveChange = (event) => {
  //   props.leave(event.target.value);
  // };

  return (
    <div className={styles["leaves"]}>
      <label className="label">Leave</label>
      <div className="select">
        <select
          onChange={(e) => {
            props.leave(e.target.value);
          }}
        >
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

export default LeaveComponent;
