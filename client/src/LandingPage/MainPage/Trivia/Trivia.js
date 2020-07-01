import React, { useState, useEffect } from "react";
import styles from "./Trivia.module.css";
import Axios from "axios";

function Trivia() {
  const [Recovered, setRecovered] = useState([]);
  const [Confirmed, setConfirmed] = useState([]);
  const [Deaths, setDeaths] = useState([]);

  console.log(Recovered, Confirmed, Deaths);

  useEffect(() => {
    Axios.get("https://covid19.mathdro.id/api/countries/MY").then(
      (response) => {
        console.log(response.data);
        setRecovered(response.data.confirmed.value);
        setConfirmed(response.data.recovered.value);
        setDeaths(response.data.deaths.value);
      }
    );
  }, []);

  return (
    <div className={styles["trivia"]}>
      <div class={`card ${styles["infected"]}`}>
        <header class="card-header">
          <p class="card-header-title">Infected</p>
        </header>
        <div class="card-content">
          <div class="content">
            <br />
          </div>
        </div>
      </div>
      <div class={`card ${styles["recovered"]}`}>
        <header class="card-header">
          <p class="card-header-title">Recovered</p>
        </header>
        <div class="card-content">
          <div class="content">
            <br />
          </div>
        </div>
      </div>
      <div class={`card ${styles["deaths"]}`}>
        <header class="card-header">
          <p class="card-header-title">Deaths</p>
        </header>
        <div class="card-content">
          <div class="content">
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trivia;
