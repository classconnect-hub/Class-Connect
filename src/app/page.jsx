import Image from "next/image";
import styles from "./home.module.css";
import Buttons from "./buttons";
import About from './about/page';

const teamMembers = [
  {
    image: "/rid.jpg",
    name: "Riddhesh C",
    link: "https://riddhesh.vercel.app/",
  },
  {
    image: "/rid.jpg",
    name: "Vedika Khochare",
    link: "https://riddhesh.vercel.app/",
  },
  {
    image: "/rid.jpg",
    name: "Apoorva Borhade",
    link: "https://riddhesh.vercel.app/",
  },
  // Add more team members here...
];  
const Home = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Class Connect</h1>
          <p className={styles.desc}>
            Think notes, advice, and connections <br></br> Think Class Connect!
          </p>
          <div className={styles.buttons}>
              <Buttons />
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/herovec.svg" alt="" fill className={styles.heroImg} />
        </div>
      </div>
      
    <About />

    </div>
  );
};

export default Home;