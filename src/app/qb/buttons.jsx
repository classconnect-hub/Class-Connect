import React from "react";
import styles from "./buttons.module.css";

const Buttons = () => {
  return (
    <div className={styles.buttonsContainer}>
      <div className={styles.buttonRow}>
      <a href="/qb/M3" target="_self">
          <button className={styles.button}>
            <span style={{ fontSize: 24, fontWeight: "bold" }}>Maths</span>
            <span>All</span>
          </button>
        </a>
      <a href="https://internal-territory-dee.notion.site/DSDS-f6c1861b4c184b0fa59e849dc6854d47?pvs=4" target="_self">
          <button className={styles.button}>
            <span style={{ fontSize: 24, fontWeight: "bold" }}>DSDS</span>
            <span>AI-DS</span>
          </button>
        </a>
        <a href="https://internal-territory-dee.notion.site/DSA-8e81c17453df4830a0bdabb28ac9e524?pvs=4" target="_self">
          <button className={styles.button}>
            <span style={{ fontSize: 24, fontWeight: "bold" }}>DSA</span>
            <span>AI-DS</span>
          </button>
        </a>
        <a href="https://internal-territory-dee.notion.site/OOPM-818588d0d2b4456bbae163237f0f52f0?pvs=4" target="_self">
          <button className={styles.button}>
            <span style={{ fontSize: 24, fontWeight: "bold" }}>OOPM</span>
            <span>AI-DS</span>
          </button>
        </a>
        <a href="https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EY8q0Iza5ydEjJR4AlW7HasBMn6CTbe9Hs4a9aTCcU10nA?e=G3hiKA" target="_self">
          <button className={styles.button}>
            <span style={{ fontSize: 24, fontWeight: "bold" }}>DAA</span>
            <span>AI-DS</span>
          </button>
        </a>
        {/* <a href="/notes/departments/EXTC" target="_self">
          <button className={styles.button}>
            <span style={{ fontSize: 24, fontWeight: "bold" }}>ExTC</span>
            <span>Department</span>
          </button>
        </a>
      </div>
       <div className={styles.buttonRow}>
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
        </a> */}
      </div>
    </div>
  );
};

export default Buttons;
