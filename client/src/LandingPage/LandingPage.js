import React from "react";
import styles from "./LandingPage.module.css";
import NavBar from "./NavBar/NavBar";

import MainPage from "./MainPage/MainPage";

function LandingPage() {
  return (
    <div className={styles["landing-page"]}>
      <NavBar />
      <MainPage />
    </div>
  );
}

export default LandingPage;
