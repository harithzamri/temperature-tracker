import React from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/images/logo1.png";
function NavBar() {
  return (
    <div>
      <figure className={`image is-128x75 ${styles["logo"]}`}>
        <img src={logo} alt="greatech" />
      </figure>
    </div>
  );
}

export default NavBar;
