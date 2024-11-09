import React from 'react';
import styles from "./resourcesmain.module.css";
import Image from "next/image";

export const metadata = {
  title: "Group Page",
  description: "Group description",
};

const teamMembers = [
  {
    image: "/react.png",
    name: "React Bootcamp",
    link: "https://t.me/+d99cbZ41r7tmZDZl",
  },
  // Add more team members here...
];

const resources = () => {
  return (
    <div className={styles.page}>
      <div className={styles.titleContainer}>
        <h1 className={styles.middleTitle}>feature TEST PAGE</h1>
      </div>
      <div className={styles.titleContainer}>
        <h2>Extra Curricular</h2>
      </div>
      <div className={styles.teamContainer}>
        <div className={styles.memberGrid}>
          {teamMembers.map((member, index) => (
            <a
              key={index}
              href={member.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.memberCard}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={100}
                height={100}
                className={styles.memberImage}
              />
              <h2 className={styles.memberName}>{member.name}</h2>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default resources;