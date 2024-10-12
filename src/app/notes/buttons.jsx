import React from "react";
import styles from "./buttons.module.css";

const Buttons = () => {
  return (
    <div className={styles.buttonsContainer}>
      <div className={styles.buttonRow}>
      <a href="/notes/departments/FY" target="_self">
          <button className={styles.button}>
            <span style={{ fontSize: 24, fontWeight: "bold" }}>FY</span>
            <span>BS&H</span>
          </button>
        </a>
        <a href="/notes/departments/COMPS" target="_self">
          <button className={styles.button}>
            <span style={{ fontSize: 24, fontWeight: "bold" }}>COMPS</span>
            <span>Department</span>
          </button>
        </a>
        <a href="/notes/departments/AIDS" target="_self">
          <button className={styles.button}>
            <span style={{ fontSize: 24, fontWeight: "bold" }}>AI-DS</span>
            <span>Department</span>
          </button>
        </a>
        <a href="/notes/departments/IT" target="_self">
          <button className={styles.button}>
            <span style={{ fontSize: 24, fontWeight: "bold" }}>IT</span>
            <span>Department</span>
          </button>
        </a>
        <a href="/notes/departments/EXTC" target="_self">
          <button className={styles.button}>
            <span style={{ fontSize: 24, fontWeight: "bold" }}>ExTC</span>
            <span>Department</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Buttons;
