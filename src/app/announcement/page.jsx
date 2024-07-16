import React from "react";
import styles from "./ann.module.css";

const Announcement = () => {
  const announcements = [
    {
      id: 1,
      title: "New Feature Released!",
      content:
        "We are excited to announce the release of our new feature, file upload which allows users to share their notes via g-form",
      date: "2024-06-21",
    },
  ];

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="middleTitle">Announcement</h1>
      </div>
      <ul className={styles.announcementList}>
        {announcements.reverse().map((announcement) => (
          <li
            key={announcement.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              marginBottom: "20px",
              backgroundColor: "#1C1C1F",
              borderRadius: "10px",
            }}
          >
            <h2 style={{ fontSize: "18px", fontWeight: "bold" }}>
              {announcement.title}
            </h2>
            <p style={{ fontSize: "16px" }}>{announcement.content}</p>
            <p style={{ fontSize: "14px", color: "#666" }}>
              <small>Posted on {announcement.date}</small>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Announcement;
