import React from "react";
import styles from "./LandingPage.module.css";
import NavBar from "./NavBar/NavBar";
import Body from "./Body/Body";

function LandingPage() {
  return (
    <div className={styles["landing-page"]}>
      <NavBar />
      <Body />
    </div>
  );
}

export default LandingPage;
