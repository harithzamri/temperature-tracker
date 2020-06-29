import React from "react";
import styles from "./MainPage.module.css";
import logo from "../../assets/images/logo1.png";

function MainPage() {
  return (
    <div className={styles["main-page"]}>
      <img src={logo} alt="logo" />
      {/* <h5 className={`title is-4 ${styles["title"]}`}>
        Login to Temperature Tracker
      </h5> */}
      <h5 className={`title is-4 ${styles["sub-title"]}`}>
        Let’s work together to keep Greatech Covid-19 Free !
      </h5>
      <div className={styles["group-buttons"]}>
        <button className="button is-info">
          <span className="icon is-small">
            <img className="fas fa-wrench" />
          </span>
          <span>Vendor</span>
        </button>
        <button className="button is-info">
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
