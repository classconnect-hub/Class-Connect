import React from "react";
import styles from "../buttons.module.css";

const Buttons = () => {
  return (
    <div className={styles.buttonsContainer}>
      <div className={styles.buttonRow}>
      <a href="/notes" target="_self">
          <button className={styles.button}>
            <span style={{ fontSize: 24, fontWeight: "bold" }}>←BACK</span>
          </button>
        </a>       
      </div>
    </div>
  );
};

export default Buttons;