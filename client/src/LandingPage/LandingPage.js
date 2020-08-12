import React from "react";
import styles from "./LandingPage.module.css";
import NavBar from "./NavBar/NavBar";

import MainPage from "./MainPage/MainPage";
import Footer from "./Footer/Footer";

function LandingPage() {
  return (
    <div className={styles["landing-page"]}>
      <NavBar />
      <MainPage />
      <Footer />
    </div>
  );
}

export default LandingPage;
