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
  const [details, setDetails] = useState("");
  const [Temperature, setTemperature] = useState("");
  const [Leaves, setLeaves] = useState("None");
  const [Shift, setShift] = useState("Morning");
  // const [ShowMore, setShowMore] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const [Symptom, setSymptom] = useState([
    { id: 1, name: "Healthy", checked: false },
    { id: 2, name: "Fever", checked: false },
    { id: 3, name: "Difficult to breath", checked: false },
    { id: 4, name: "Cough", checked: false },
    { id: 5, name: "History Travel to Redzone", checked: false },
  ]);
  const [Checked, setChecked] = useState([]);

  const limit =
    Temperature >= 35.5 && Temperature <= 38 ? null : (
      <p className="help is-danger">
        <b>Your range of temperature must between 35.5 - 38.0</b>
      </p>
    );
  function onSubmit() {
    const variables = {
      EmployeeId,
      Temperature,
      // Symptom,
      Shift,
      Checked,
      details,
      // Leave: Leaves,
    };

    console.log(variables);

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

  // const symptom = [
  //   { id: 1, name: "Healthy" },
  //   { id: 2, name: "Fever" },
  //   { id: 3, name: "Difficult to breath" },
  //   { id: 4, name: "Cough" },
  //   { id: 5, name: "History Travel to Redzone" },
  //   { id: 6, name: "Close contact to suspected/confirmed Covid-19 patient" },
  // ];

  const shift = [
    { id: 1, name: "Morning" },
    { id: 2, name: "Night" },
  ];

  const handleClick = (e) => {
    // This is the id passed in
    const id = e.target.value;
    const currentIndex = Checked.indexOf(id);
    const newChecked = [...Checked];
    if (currentIndex === -1) {
      newChecked.push(id);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    // Find index of the item selected
    const index = Symptom.findIndex((e) => e.id === parseInt(id, 10));

    // We declare a copy of the symptom array
    const newArr = [...Symptom];
    // Toggle the checked value in the specific selected item
    newArr[index].checked = !newArr[index].checked;

    // Replace the entire old array with the new one
    setSymptom(newArr);
    setChecked(newChecked);

    // Do logic on newArr instead of symptom because setSymptom
    // is async so we can't guarantee that value is changed
    if (newArr[index].id === 1) {
      return toast.success("Stay Healthy 🌞", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      return toast.dark(
        "Please notify Employee Health Response Team <gim-ehrt@greatech-group.com> immediately about your daily health monitoring report. Thank you. 💉",
        {
          position: "top-right",
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
  };

  // const handleToggle = (value) => {
  //   const currentIndex = Symptom.indexOf(value);
  //   const newChecked = [...Symptom];

  //   if (currentIndex === -1) {
  //     newChecked.push(value);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }
  //   console.log(newChecked);
  //   setSymptom(newChecked);
  // };

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

  const symptomchecked = Symptom.map((symptom) => {
    return (
      <div className="control">
        <label className="checkbox">
          <input
            className="test"
            key={symptom.id}
            type="checkbox"
            checked={symptom.checked}
            onChange={handleClick}
            value={symptom.id}
            name="Symptom"
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
      <form className={styles["form"]} onSubmit={handleSubmit(onSubmit)}>
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
            <input
              className="input"
              type="text"
              onChange={(e) => setDetails(e.target.value)}
              value={details}
            />

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
            <label className={`radio ${styles["button"]}`}>
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
