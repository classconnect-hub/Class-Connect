import React from 'react'
import Buttons from './buttons';
import styles from "./resources.module.css";
import { color } from 'framer-motion';

const resources = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className={styles.middleTitle}>Resources</h1>
      </div>
      <Buttons />
      <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px" ,
          fontSize: "24px",
        }}>
      <h2>Day 1</h2>
      
      </div>
      <div className={styles.container}>
      <h3>Day 1 Resources : </h3>
        <a className={styles.link} target='_blank' href="https://docs.google.com/document/d/1QmchTDtbdFYwtY2aNDtc13LhsEiFXztpTA4pRnG9HZk/pub">
          <p>  Click here</p>
        </a>
      </div>
      
    </div>
  )
}

export default resources
