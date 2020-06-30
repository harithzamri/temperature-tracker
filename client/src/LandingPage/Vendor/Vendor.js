import React, { useState } from "react";
import styles from "./Vendor.module.css";

import NavBar from "../NavBar/NavBar";

function Vendor() {
  const [VendorName, setVendorName] = useState("");
  const [Temperature, setTemperature] = useState("");
  const [Symptom, setSymptom] = useState([]);
  const [Company, setCompany] = useState("");
  const [Phone, setPhone] = useState("");
  const [ShowMore, setShowMore] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
  }

  const symptom = [
    { id: 1, name: "Healthy" },
    { id: 2, name: "Fever" },
    { id: 3, name: "Difficult to breath" },
    { id: 4, name: "Cough" },
    { id: 5, name: "History Travel to Redzone" },
    { id: 6, name: "Close contact to suspected/confirmed Covid-19 patient" },
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

  const numberOfItems = ShowMore ? symptom.length : 3;
  const message = ShowMore ? "Less" : "More";
  const textbox = ShowMore ? (
    <div className="label">
      <input className="input" type="text" />

      <p className="help is-danger">
        Please state history travel if you went to Redzone Area and relation on
        the suspected/confirmed Covid-19 patient
      </p>
    </div>
  ) : null;

  const handleClick = () => {
    setShowMore(!ShowMore);
  };

  const symptomchecked = symptom.slice(0, numberOfItems).map((symptom) => {
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
          />{" "}
          {symptom.name}
        </label>
      </div>
    );
  });

  return (
    <div className={styles["vendor"]}>
      <NavBar />
      <form onSubmit={onSubmit}>
        <label className="label">Vendor Name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Vendor Name"
            onChange={(e) => setVendorName(e.target.value)}
            value={VendorName}
            name="VendorName"
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
            step="0.01"
            name="Temperature"
          />
        </div>

        <label className="label">Phone Number</label>
        <div className="control">
          <input
            className="input"
            type="number"
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
            value={Phone}
            name="Phone"
          />
        </div>

        <label className="label">Company</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Company Name"
            onChange={(e) => setCompany(e.target.value)}
            value={Company}
            name="Company"
          />
        </div>

        <div className={styles["checkbox"]}>
          {symptomchecked}
          {textbox}
          <button
            className={`button is-white is-small ${styles["show-more"]}`}
            onClick={() => handleClick()}
          >
            Show {message}
          </button>
        </div>

        <div>
          <div className={`buttons ${styles["button-display"]}`}>
            <button
              className="button is-medium is-fullwidth is-primary"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Vendor;
