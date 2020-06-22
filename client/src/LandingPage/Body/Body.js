import React, { useState } from "react";
import styles from "./Body.module.css";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";

function Body(props) {
  const [EmployeeId, setEmployeeId] = useState("");
  const [Temperature, setTemperature] = useState("");
  const [Symptom, setSymptom] = useState([]);
  const [Shift, setShift] = useState("Morning");
  const { register, handleSubmit, errors } = useForm();
  const notify = () => toast("Success");
  const notnotify = () => toast("Failed");
  const result =
    !EmployeeId || !Temperature || !Symptom || !Shift || Boolean(limit)
      ? notnotify
      : notify;

  const limit =
    Temperature >= 35.5 && Temperature <= 38
      ? null
      : " Your range of temperature must between 35.5 - 38.0";
  function onSubmit(e) {
    //console.log(EmployeeId, Temperature, Symptom, Shift);
    const newDate = new Date().toLocaleDateString();
    const variables = {
      EmployeeId,
      Temperature,
      //Symptom,
      Shift,
      date: newDate,
    };

    Axios.post("http://localhost:5000/employee/uploadData", variables).then(
      (response) => {
        if (response.data.success) {
          props.history.push("/successPage");
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
    { id: 5, name: "Travel History" },
  ];

  const shift = [
    { id: 1, name: "Morning" },
    { id: 2, name: "Night" },
  ];

  const handleToggle = (value) => {
    const currentIndex = Symptom.indexOf(value);
    const newChecked = [...Symptom];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    console.log(newChecked);
    setSymptom(newChecked);
  };

  const symptomchecked = symptom.map((symptom) => {
    return (
      <div className="control">
        <label className="checkbox">
          <input
            type="checkbox"
            checked={Symptom.indexOf(symptom.id) === -1 ? false : true}
            key={symptom.id}
            name="Disease"
            onChange={() => handleToggle(symptom.id)}
            ref={register({ required: true })}
          />
          {symptom.name}
        </label>
      </div>
    );
  });

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="label">EmployeeID</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Employee ID"
            onChange={(e) => setEmployeeId(e.target.value)}
            value={EmployeeId}
            name="Employee"
            ref={register({ required: true, pattern: /^(.{6})/i })}
          />
          {errors.Employee && (
            <p className="help is-danger">Employee ID invalid</p>
          )}
        </div>

        <label className="label">Temperature</label>
        <div className="control">
          <input
            className="input"
            type="number"
            placeholder="Temperature"
            onChange={(e) => setTemperature(e.target.value)}
            value={Temperature}
            step="0.01"
            ref={register({ required: true })}
            name="Temperature"
          />
          {errors.Temperature && (
            <p className="help is-danger">Temperature is Required</p>
          )}
          <p className="help is-danger">{limit}</p>
        </div>
        <div className={styles["checkbox"]}>
          {symptomchecked}
          {errors.Disease && <p className="help is-danger">Invalid</p>}
        </div>
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
                required
              />
              {shift.name}
            </label>
          ))}
        </div>
        <div>
          <div className={`buttons ${styles["button-display"]}`}>
            <button
              className="button is-medium is-fullwidth is-primary"
              type="submit"
              onClick={result}
            >
              Save
            </button>
            <ToastContainer />
          </div>
        </div>
      </form>
    </div>
  );
}

export default withRouter(Body);
