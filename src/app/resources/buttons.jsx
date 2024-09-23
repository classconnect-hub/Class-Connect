import React from "react";
import styles from "./buttons.module.css";

const Buttons = () => {
  return (
    <div className={styles.buttonsContainer}>
      <div className={styles.buttonRow}>
      <a href="https://github.com/404reese" target="_self">
  <button className={styles.button}>
    <span style={{ fontSize: 24, fontWeight: "bold" }}>
      <img className={styles.img} src="/github.png" alt="Github" />
    </span>
    <span>Github Repository</span>
  </button>
</a>
<a href="https://chat.whatsapp.com/IW9gIToyS9GFCFCNfnuFL7" target="_blank">
  <button className={styles.button}>
    <span style={{ fontSize: 24, fontWeight: "bold" }}>
      <img className={styles.img} src="/whatsapp.png" alt="Github" />
    </span>
    <span>Whatsapp Group</span>
  </button>
</a>
{/*
<a href="linkedin.com" target="_blank">
  <button className={styles.button}>
    <span style={{ fontSize: 24, fontWeight: "bold" }}>
      <img className={styles.img} src="/linkedin.png" alt="LinkedIn" />
    </span>
    <span>LinkedIn Account</span>
  </button>
</a>
         <a href="https://chat.whatsapp.com/JgpfP9IrrXHAvCd71DLseC" target="_blank">
          <button className={styles.button}>
            <span style={{ fontSize: 24, fontWeight: "bold" }}>OOPM</span>
            <span>CodeAI Community</span>
          </button>
        </a>
         <a href="https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EY8q0Iza5ydEjJR4AlW7HasBMn6CTbe9Hs4a9aTCcU10nA?e=G3hiKA" target="_self">
          <button className={styles.button}>
            <span style={{ fontSize: 24, fontWeight: "bold" }}>DAA</span>
            <span>AI-DS</span>
          </button>
        </a> */}
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
