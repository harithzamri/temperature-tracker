import React, { useState } from "react";
import styles from "./Body.module.css";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
// import LeaveComponent from "./LeaveComponent/LeaveComponent";
import NavBar from "../NavBar/NavBar";

function Body(props) {
  const [EmployeeId, setEmployeeId] = useState("");
  const [Temperature, setTemperature] = useState("");
  const [Symptom, setSymptom] = useState([]);
  const [Leaves, setLeaves] = useState("None");
  const [Shift, setShift] = useState("Morning");
  // const [ShowMore, setShowMore] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const limit =
    Temperature >= 35.5 && Temperature <= 38
      ? null
      : " Your range of temperature must between 35.5 - 38.0";
  function onSubmit() {
    const variables = {
      EmployeeId,
      Temperature,
      //Symptom,
      Shift,
      // Leave: Leaves,
    };

    Axios.post("http://localhost:5000/employee/uploadData", variables).then(
      (response) => {
        if (response.data.success) {
          props.history.push({
            pathname: "/successPage",
            EmployeeId,
          });
          return toast.success("Success", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          return toast.error(
            "You already Login for today, try again tomorrow",
            {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
        }
      }
    );
  }

  const symptom = [
    { id: 1, name: "Healthy" },
    { id: 2, name: "Fever" },
    { id: 3, name: "Difficult to breath" },
    { id: 4, name: "Cough" },
    { id: 5, name: "History Travel to Redzone" },
    { id: 6, name: "Close contact to suspected/confirmed Covid-19 patient" },
  ];

  const shift = [
    { id: 1, name: "Morning" },
    { id: 2, name: "Night" },
  ];

  const handleClick = (e) => {
    // This is the id passed in
    const id = e.target.value;

    // Find index of the item selected
    const index = symptom.findIndex((e) => e.id === parseInt(id, 10));

    // We declare a copy of the symptom array
    const newArr = [...symptom];
    // Toggle the checked value in the specific selected item
    newArr[index].checked = !newArr[index].checked;

    // Replace the entire old array with the new one
    setSymptom(newArr);

    // Do logic on newArr instead of symptom because setSymptom
    // is async so we can't guarantee that value is changed
    if (newArr[index].name === "Cough" && newArr[index].checked === true) {
      return <span>Careful</span>;
    }
  };

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

  const onLeave = (e) => {
    setLeaves(e);
    console.log(Leaves);
  };

  // const numberOfItems = ShowMore ? symptom.length : 3;
  // const message = ShowMore ? "Less" : "More";
  // const textbox = ShowMore ? (
  //   <div className="label">
  //     <input className="input" type="text" />

  //     <p className="help is-danger">
  //       Please state history travel if you went to Redzone Area and relation on
  //       the suspected/confirmed Covid-19 patient
  //     </p>
  //   </div>
  // ) : null;

  // const handleClick = () => {
  //   if(window.confirm('Are you sure'))
  // };

  const symptomchecked = symptom.map((symptom) => {
    return (
      <div className="control">
        <label className="checkbox">
          <input
            className="test"
            type="checkbox"
            checked={Symptom.indexOf(symptom.id) === -1 ? false : true}
            key={symptom.id}
            name="Disease"
            onChange={() => handleToggle(symptom.id)}
            ref={register({ required: true })}
          />{" "}
          {symptom.name}
        </label>
      </div>
    );
  });

  return (
    <div className={styles["body"]}>
      <NavBar />
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
          <div className="label">
            <input className="input" type="text" />

            <p className="help is-danger">
              Please state history travel if you went to Redzone Area and
              relation on the suspected/confirmed Covid-19 patient
            </p>
          </div>

          {/* <button onClick={handleClick}>Are you sure</button> */}

          {errors.Disease && <p className="help is-danger">Invalid</p>}
        </div>
        {/* <LeaveComponent leave={onLeave} /> */}

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
              onClick={(e) => {
                if (
                  window.confirm("Are you sure you wish to delete this item?")
                )
                  this.deleteItem(e);
              }}
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
