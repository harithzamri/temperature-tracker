import React, { useState, useEffect } from "react";
import styles from "./Trivia.module.css";
import Axios from "axios";

function Trivia() {
  const [Confirmed, setConfirmed] = useState({});
  const [Recovered, setRecovered] = useState({});
  const [Deaths, setDeaths] = useState({});

  useEffect(() => {
    Axios.get("https://covid19.mathdro.id/api/countries/MY").then(
      (response) => {
        setConfirmed(response.data.confirmed);
        setRecovered(response.data.recovered);
        setDeaths(response.data.deaths);
      }
    );
  }, []);

  return (
    <div>
      <h5 className={`title is-5 ${styles["title"]}`}>Covid-19 Updates</h5>
      <div className={styles["trivia"]}>
        <div className={`card ${styles["infected"]}`}>
          <header className="card-header">
            <p className="card-header-title">Infected</p>
          </header>
          <div className="card-content">
            <div className="content">
              <strong>{Confirmed.value}</strong>
              <br />
            </div>
          </div>
        </div>
        <div className={`card ${styles["recovered"]}`}>
          <header className="card-header">
            <p className="card-header-title">Recovered</p>
          </header>
          <div className="card-content">
            <div className="content">
              <strong>{Recovered.value}</strong>
              <br />
            </div>
          </div>
        </div>
        <div className={`card ${styles["deaths"]}`}>
          <header className="card-header">
            <p className="card-header-title">Deaths</p>
          </header>
          <div className="card-content">
            <div className="content">
              <strong>{Deaths.value}</strong>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trivia;
