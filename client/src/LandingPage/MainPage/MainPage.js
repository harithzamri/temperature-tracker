import React from "react";
import styles from "./MainPage.module.css";
import logo from "../../assets/images/logo1.png";

function MainPage() {
  return (
    <div className={styles["main-page"]}>
      <img src={logo} alt="logo" />
      {/* <h3 className={`title is-3 ${styles["title"]}`}>Welcome to Greatech</h3> */}
      <div className={styles["group-buttons"]}>
        <button className="button is-primary">
          <span className="icon is-small">
            <img className="fas fa-wrench" />
          </span>
          <span>Vendor</span>
        </button>
        <button className="button is-primary">
          <span className="icon is-small">
            <img className="fas fa-user-tie" />
          </span>
          <span>Employee</span>
        </button>
      </div>
    </div>
  );
}

export default MainPage;
