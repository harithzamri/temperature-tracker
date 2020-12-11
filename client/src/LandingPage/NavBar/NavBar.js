import React from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/images/logo1.png";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <Link to="/">
        <figure className={`image is-128x75 ${styles["logo"]}`}>
          <img src={logo} alt="greatech" />
        </figure>
      </Link>
    </div>
  );
}

export default NavBar;
