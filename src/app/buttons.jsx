import React from "react";
import styles from "./buttons.module.css";
import Image from "next/image";

const Buttons = () => {
  return (
    <div className={styles.buttonsContainer}>
      <div className={styles.buttonRow}>
        <a href="/notes" target="_self">
          <button className={styles.button}>
            <Image
              src="/notes-icon.png"
              alt="Notes Icon"
              width={40}
              height={40}
            />
            <span>Notes</span>
          </button>
        </a>
        <a href="/qb" target="_self">
          <button className={styles.button}>
            <Image src="/qb.png" alt="qb Icon" width={40} height={40} />
            <span>QuestionBank</span>
          </button>
        </a>
        <a href="/pyq" target="_self">
          <button className={styles.button}>
            <Image src="/pyq-icon.png" alt="PYQ Icon" width={40} height={40} />
            <span>PYQ</span>
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
        <a href="/resources" target="_self">
          <button className={styles.button}>
            <Image
              src="/resources-icon.png"
              alt="resources Icon"
              width={40}
              height={40}
            />
            <span>Resources</span>
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
      </div>
    </div>
  );
};

export default Buttons;
