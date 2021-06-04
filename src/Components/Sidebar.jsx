import React from "react";
import styles from "./css/Sidebar.module.css";
import Skills from "./Skills.jsx";
import Interests from "./Interests.jsx";

export default function Sidebar() {
  return (
    <div
      className={`col-12 order-2 col-lg-3 order-lg-1 d-flex`}
      style={{ padding: "0" }}>
      <div className={`${styles.Sidebar} align-self-stretch p-3 w-100`}>
        <Skills /> <Interests />
      </div>
    </div>
  );
}
