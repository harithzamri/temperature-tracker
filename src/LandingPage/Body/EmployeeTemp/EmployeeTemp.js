import React, { useState, useEffect } from "react";

function EmployeeTemp(props) {
  const [EmployeeID, setEmployeeID] = useState("");
  const [Temperature, setTemperature] = useState("");

  useEffect(() => {
    props.details(EmployeeID, Temperature);
  }, []);

  return (
    <div>
      <label className="label">EmployeeID</label>
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder="Employee ID"
          onChange={(e) => setEmployeeID(e.target.value)}
          value={EmployeeID}
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
    </div>
  );
}

export default EmployeeTemp;
