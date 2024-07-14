import React from "react";
import styles from "./groups.css";
import Image from "next/image";

export const metadata = {
  title: "Group Page",
  description: "Group description",
};

const teamMembers = [
  {
    image: "/telegram.png",
    name: "CC Telegram Community",
    link: "https://t.me/+d99cbZ41r7tmZDZl",
  },
  {
    image: "/whatsapp.webp",
    name: "CC Whatsapp Community",
    link: "https://chat.whatsapp.com/DnOewDQW7Cv2ajztcVabqo",
  },

  // Add more team members here...
];

const Groups = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
        <h1 className="middleTitle">Groups</h1>
      </div>
      <div className={styles.teamContainer}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {teamMembers.map((member, index) => (
            <a
              key={index}
              href={member.link}
              target="_blank"
              style={{
                textDecoration: "none", /* remove underline */
                color: "inherit", /* inherit text color */
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px",
                backgroundColor: "rgba(255, 255, 255, 0.3)", /* glass morphism background */
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(10px)",
                width: "20 px",
                marginBottom: "20px",
              }}
            >
              <Image
                src={member.image}
                alt=""
                width={100}
                height={100}
                style={{
                  marginBottom: "10px",
                  alignContent: "center",
                }}
              />
              <h2
                style={{
                  textAlign: "center",
                  fontSize: "18px",
                  marginBottom: "5px",
                  color: "#fff", /* dark text color */
                }}
              >
                {member.name}
              </h2>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Groups;