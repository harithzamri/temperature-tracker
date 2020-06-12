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
    !EmployeeId || !Temperature || !Symptom || !Shift ? notnotify : notify;

  const limit =
    Temperature >= 36 && Temperature <= 38
      ? null
      : " Your range of temperature must between 36-38";
  function onSubmit(e) {
    console.log(EmployeeId, Temperature, Symptom, Shift);

    const variables = {
      EmployeeId,
      Temperature,
      //Symptom,
      Shift,
    };

    Axios.post(
      "https://rocky-plains-03473.herokuapp/employee/uploadData",
      variables
    ).then((response) => {
      if (response.data.success) {
        props.history.push(`/employee/${EmployeeId}`);
      } else {
        alert("falied");
      }
    });
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
      <label className="checkbox">
        <input
          type="checkbox"
          checked={Symptom.indexOf(symptom.id) === -1 ? false : true}
          key={symptom.id}
          onChange={() => handleToggle(symptom.id)}
        />
        {symptom.name}
      </label>
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
            ref={register({ required: true })}
          />
          {errors.Employee && (
            <p className="help is-danger">Employee ID required</p>
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
            ref={register({ required: true })}
            name="Temperature"
          />
          {errors.Temperature && (
            <p className="help is-danger">Temperature is Required</p>
          )}
          <p className="help is-danger">{limit}</p>
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
