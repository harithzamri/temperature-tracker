import React, { useState } from "react";
import styles from "./Body.module.css";
import Axios from "axios";
import { withRouter } from "react-router-dom";

function Body(props) {
  const [EmployeeId, setEmployeeId] = useState("");
  const [Temperature, setTemperature] = useState("");
  const [Symptom, setSymptom] = useState("Healthy");
  const [Shift, setShift] = useState("Morning");

  function onSubmit(e) {
    e.preventDefault();
    console.log(EmployeeId, Temperature, Symptom, Shift);

    if (!EmployeeId || !Temperature || !Symptom || !Shift) {
      return alert("please complete the form first");
    }

    const variables = {
      EmployeeId,
      Temperature,
      Symptom,
      shift,
    };

    Axios.post("http://localhost:5000/employee/uploadData", variables).then(
      (response) => {
        if (response.data.success) {
          alert("You already submit the form");
          props.history.push(`/employee/${EmployeeId}`);
        } else {
          alert("falied");
        }
      }
    );
  }

  const symptom = [
    { id: 1, name: "Healthy" },
    { id: 2, name: "Fever" },
    { id: 3, name: "Difficult to breath" },
    { id: 4, name: "Cough" },
  ];

  const shift = [
    { id: 1, name: "Morning" },
    { id: 2, name: "Night" },
  ];

  const symptomchecked = symptom.map((symptom) => {
    return (
      <label className="checkbox">
        <input
          type="checkbox"
          checked={Symptom ? Symptom === symptom.name : false}
          disabled={Symptom ? Symptom !== symptom.name : false}
          key={symptom.id}
          onChange={() =>
            setSymptom((prevSymptom) =>
              prevSymptom === symptom.name ? false : symptom.name
            )
          }
        />
        {symptom.name}
      </label>
    );
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label className="label">EmployeeID</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Employee ID"
            onChange={(e) => setEmployeeId(e.target.value)}
            value={EmployeeId}
          />
        </div>
        <label className="label">Temperature</label>
        <div className="control">
          <input
            className="input"
            type="number"
            placeholder="Temperature"
            onChange={(e) => setTemperature(e.target.value)}
            value={Temperature}
          />
        </div>
        <div className={styles["checkbox"]}>{symptomchecked}</div>
        <label className="label">Shift</label>
        <div className="control">
          {shift.map((shift) => (
            <label className="radio">
              <input
                type="radio"
                checked={Shift ? Shift === shift.name : false}
                key={shift.id}
                name="answer"
                value={shift.name}
                onChange={(e) => setShift(e.target.value)}
              />
              {shift.name}
            </label>
          ))}
        </div>
        <div>
          <div className={`buttons ${styles["button-display"]}`}>
            <button
              className="button is-medium is-fullwidth is-primary"
              onClick={onSubmit}
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default withRouter(Body);
