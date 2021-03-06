import React, { useState } from "react";
import styles from "./Vendor.module.css";
import Axios from "axios";
import NavBar from "../NavBar/NavBar";
import { withRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";

function Vendor(props) {
  const [VendorName, setVendorName] = useState("");
  const [Temperature, setTemperature] = useState("");

  const [Company, setCompany] = useState("");
  const [Phone, setPhone] = useState("");
  const [ShowMore, setShowMore] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const [Symptom, setSymptom] = useState([
    { id: 1, name: "Healthy" },
    { id: 2, name: "Fever" },
    { id: 3, name: "Difficult to breath" },
    { id: 4, name: "Cough" },
    { id: 5, name: "History Travel to Redzone" },
    { id: 6, name: "Close contact to suspected/confirmed Covid-19 patient" },
  ]);

  const limit =
    Temperature >= 35.5 && Temperature <= 38
      ? null
      : " Your range of temperature must between 35.5 - 38.0";

  function onSubmit(e) {
    const variables = {
      VendorName,
      Temperature,
      Company,
      Phone,
      // Symptom
    };

    console.log(VendorName, Temperature, Company, Phone);

    Axios.post("http://localhost:5000/vendor/uploadVendor", variables).then(
      (response) => {
        if (response.data.success) {
          props.history.push("/successPage");
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
          alert("failed");
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

  const handleClick = (e) => {
    // This is the id passed in
    const id = e.target.value;

    // Find index of the item selected
    const index = Symptom.findIndex((e) => e.id === parseInt(id, 10));

    // We declare a copy of the symptom array
    const newArr = [...Symptom];
    // Toggle the checked value in the specific selected item
    newArr[index].checked = !newArr[index].checked;

    // Replace the entire old array with the new one
    setSymptom(newArr);

    // Do logic on newArr instead of symptom because setSymptom
    // is async so we can't guarantee that value is changed
    // if (newArr[index].id === 1) {
    //   return toast.success("Stay Healthy 🌞", {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //   });
    // } else {
    //   return toast.warning(
    //     "Please notify Employee Health Response Team <gim-ehrt@greatech-group.com> immediately about your daily health monitoring report. Thank you. 💉",
    //     {
    //       position: "top-right",
    //       autoClose: 8000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //     }
    //   );
    // }
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

  // const handleClickVendor = () => {
  //   setShowMore(!ShowMore);
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
    <div className={styles["vendor"]}>
      <NavBar />
      <form className={styles["form"]} onSubmit={handleSubmit(onSubmit)}>
        <label className="label">Vendor Name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Vendor Name"
            onChange={(e) => setVendorName(e.target.value)}
            value={VendorName}
            ref={register({ required: true })}
            name="Name"
          />
          {errors.Name && <p className="help is-danger">Name is required</p>}
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
            step="0.01"
            name="Temperature"
          />
          {errors.Temperature && (
            <p className="help is-danger">Temperature is required</p>
          )}
          <p className="help is-danger">{limit}</p>
        </div>

        <label className="label">Phone Number</label>
        <div className="control">
          <input
            className="input"
            type="tel"
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
            value={Phone}
            ref={register({ required: true })}
            name="Phone"
          />
          {errors.Phone && (
            <p className="help is-danger">Phone Number is required</p>
          )}
        </div>

        <label className="label">Company</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Company Name"
            onChange={(e) => setCompany(e.target.value)}
            value={Company}
            ref={register({ required: true })}
            name="Company"
          />
        </div>
        {errors.Company && (
          <p className="help is-danger">Company is required</p>
        )}

        <div className={styles["checkbox"]}>
          {symptomchecked}
          <div className="label">
            <input className="input" type="text" />

            <p className="help is-danger">
              Please state history travel if you went to Redzone Area and
              relation on the suspected/confirmed Covid-19 patient
            </p>
          </div>
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

export default withRouter(Vendor);
