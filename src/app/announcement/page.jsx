import React from 'react';
import styles from "./ann.module.css";

const Announcement = () => {
  const announcements = [
    {
      id: 4,
      title: 'Newest Announcement!',
      content: 'This is the newest announcement!',
      date: '2023-03-05'
    },
    {
      id: 3,
      title: 'New Partnership Announcement',
      content: 'We are thrilled to announce our new partnership with XYZ Corporation, which will bring new opportunities...',
      date: '2023-03-01'
    },
    {
      id: 2,
      title: 'Maintenance Scheduled',
      content: 'Our team will be performing maintenance on our servers on Saturday, March 3rd, from 10pm to 2am.',
      date: '2023-02-25'
    },
    {
      id: 1,
      title: 'New Feature Released!',
      content: 'We are excited to announce the release of our new feature, which allows users to...',
      date: '2023-02-20'
    }
  ];

  return (
    <div className="announcement-page">
  <div className="announcement-header">
    <h1 style={{ fontFamily:'Kaisei Tokumin', textAlign:'center'  }}>Announcements</h1>
  </div>
  <ul className={styles.announcementList}>
    {announcements.reverse().map((announcement) => (
      <li key={announcement.id} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '20px', backgroundColor: '#1C1C1F', borderRadius:'10px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>{announcement.title}</h2>
        <p style={{ fontSize: '16px' }}>{announcement.content}</p>
        <p style={{ fontSize: '14px', color: '#666' }}>
          <small>Posted on {announcement.date}</small>
        </p>
      </li>
    ))}
  </ul>
</div>
  );
};

export default Announcement;