'use client';
import React from "react";
import styles from "./exp.module.css";

const Announcement = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className={styles.middleTitle}>Lab Experiments</h1>
      </div>
      <div className={styles.cardContainer}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '40px 40px 20px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)', /* glass morphism background */
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(10px)',
            marginRight: '20px',
          }}
        >
          <h1>Physics</h1>
          <p className={styles.department}>Department of Physics</p>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '40px 40px 20px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)', /* glass morphism background */
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(10px)',
            marginRight: '20px',
          }}
        >
          <h1>Chemistry</h1>
          <p className={styles.department}>Department of Chemistry</p>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '40px 40px 20px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)', /* glass morphism background */
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(10px)',
            marginRight: '20px',
          }}
        >
          <h1>Biology</h1>
          <p className={styles.department}>Department of Biology</p>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '40px 40px 20px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)', /* glass morphism background */
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(10px)',
            marginRight: '20px',
          }}
        >
          <h1>Mathematics</h1>
          <p className={styles.department}>Department of Mathematics</p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;