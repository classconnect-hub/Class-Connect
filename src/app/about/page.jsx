import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const teamMembers = [
  {
    image: "/dinocat99.jpeg",
    name: "dinocat99",
    link: "#",
  },
  {
    image: "/contro-harsh.jpeg",
    name: "Harsh Shingavi",
    link: "https://www.linkedin.com/in/harsh-shingavi/",
  },
  {
    image: "/contro-vrunda.jpeg",
    name: "Vrunda Parekh",
    link: "https://www.linkedin.com/in/vrunda-parekh-a3b947256/",
  },
  {
    image: "/contro-2.png",
    name: "Titiksha Bhavsar",
    link: "https://www.linkedin.com/in/titikshabhavsar/",
  },
  // Add more team members here...
]; 

const AboutPage = () => {

  // console.log("lets check where it works")
  return (
    <div className={styles.heroCont}>
        <h1 className={styles.middleTitle}>Our Team</h1>
        <div className={styles.teamContainer}>
  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }}>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 40px 20px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)', /* glass morphism background */
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(10px)',
      marginRight: '20px',
    }}>
      <Image src="/rid.jpg" alt="" width={200} height={200} style={{
        borderRadius: '50%',
        marginBottom: '20px'
      }} />
      <h2 style={{
        textAlign: 'center',
        fontSize: '24px',
        marginBottom: '10px',
        color: '#fff' /* dark text color */
      }}>Riddhesh C</h2>
      <p style={{
        textAlign: 'center',
        fontSize: '18px',
        color: '#fff', /* medium dark text color */
        marginBottom: '20px'
      }}>Project Lead</p>
      <p style={{
        textAlign: 'center',
        fontSize: '18px',
        color: '#fff', /* medium dark text color */
        marginBottom: '20px'
      }}>
        <a href="https://github.com/404reese" target="_blank" style={{ marginRight: '10px' }}>
          <Image src="/github.png" alt="GitHub" width="30" height="30" />
        </a>
        <a href="https://riddhesh.vercel.app/" target="_blank" style={{ marginRight: '10px' }}>
          <Image  src="/web.png" alt="Wensite" width="33" height="33" />
        </a>
        <a href="https://www.linkedin.com/in/riddheshchaudhary/" target="_blank" style={{ marginRight: '10px' }}>
          <Image  src="/linkedin.png" alt="LinkedIn" width="30" height="30" />
        </a>
      </p>
    </div>
{/*     
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 40px 20px',
      backgroundColor: 'rgba(255, 255, 255, 0.3)', 
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(10px)'
    }}>
      <Image src="/rid.jpg" alt="" width={200} height={200} style={{
        borderRadius: '50%',
        marginBottom: '20px'
      }} />
      <h2 style={{
        textAlign: 'center',
        fontSize: '24px',
        marginBottom: '10px',
        color: '#fff' 
      }}>Laxman Bafna</h2>
      <p style={{
        textAlign: 'center',
        fontSize: '18px',
        color: '#fff', 
        marginBottom: '20px'
      }}>Project Lead</p>
      <p style={{
        textAlign: 'center',
        fontSize: '18px',
        color: '#fff', 
        marginBottom: '10px'
      }}>
        <a href="https://github.com/luckyb13" target="_blank" style={{ marginRight: '10px' }}>
          <img src="/github.png" alt="GitHub" width="30" height="30" />
        </a>
        <a href="https://riddhesh.vercel.app/" target="_blank" style={{ marginRight: '10px' }}>
          <img src="/web.png" alt="Wensite" width="33" height="33 " />
        </a>
        <a href="https://www.linkedin.com/in/laxman-bafna-jain-357100b8" target="_blank" style={{ marginRight: '10px' }}>
          <img src="/linkedin.png" alt="LinkedIn" width="30" height="30" />
        </a>
      </p>
    </div> */}
  </div>
</div>


    {/* ======================= end of teams ================================= */}



    <h1 className={styles.middleTitle}>Our Contributors</h1>
    <div className={styles.teamContainer}>
  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }}>
    {teamMembers.map((member, index) => (
      <div key={index} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.2)', /* glass morphism background */
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        width: '30%', /* adjust this value to fit 6 cards in one row */
        marginBottom: '20px'
      }}>
        <Image src={member.image} alt="" width={100} height={100} style={{
          borderRadius: '50%',
          marginBottom: '10px'
        }} />
       <a href={member.link} target="_blank">
        <h2 style={{
          textAlign: 'center',
          fontSize: '18px',
          marginBottom: '5px',
          color: '#fff' /* dark text color */
        }}>{member.name}</h2>
    </a>
      </div>
    ))}
  </div>
</div>
      </div>
  );
};

export default AboutPage;
