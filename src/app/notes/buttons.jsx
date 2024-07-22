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
      {/* <div className={styles.buttonRow}>
        <a href="/groups" target="_self">
          <button className={styles.button}>
            <Image src="/groups.png" alt="Groups Icon" width={40} height={40} />
            <span>Groups</span>
          </button>
        </a>
        <a href="/announcement" target="_self">
          <button className={styles.button}>
            <Image
              src="/announcement.png"
              alt="Events Icon"
              width={40}
              height={40}
            />
            <span>Announcement</span>
          </button>
        </a>
        <a
          href="https://forms.gle/h71DCmW3tuc91cLGA"
          target="_blank"
          className={styles.button}
        >
          <Image src="/upload.png" alt="Upload Icon" width={40} height={40} />
          <span>Contribute</span>
        </a>
      </div> */}
    </div>
  );
};

export default Buttons;
