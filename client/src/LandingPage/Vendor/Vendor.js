import React from "react";
import styles from "./Vendor.module.css";
import { useState } from "react";
import { useEffect } from "react";
import NavBar from "../NavBar/NavBar";

function Vendor() {
  const [VendorName, setVendorName] = useState("");
  const [Temperature, setTemperature] = useState("");
  const [Symptom, setSymptom] = useState([]);
  const [Company, setCompany] = useState("");
  const [Phone, setPhone] = useState("");

  useEffect(() => {}, []);

  const symptom = [
    { id: 1, name: "Healthy" },
    { id: 2, name: "Fever" },
    { id: 3, name: "Difficult to breath" },
    { id: 4, name: "Cough" },
    { id: 5, name: "History Travel to Redzone" },
    { id: 6, name: "Close contact to suspected/confirmed Covid-19 patient" },
  ];

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
            onChange
          />{" "}
          {symptom.name}
        </label>
      </div>
    );
  });

  return (
    <div className={styles["vendor"]}>
      <NavBar />
      <form onSubmit>
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

        <div className="checkbox">{symptomchecked}</div>
      </form>
    </div>
  );
}

export default Vendor;
