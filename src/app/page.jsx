
import styles from "./home.module.css";
import Buttons from "./buttons";
import About from './about/page';
import { PageWrapper } from "./page-wrapper";
import HeroImg from "./heroimg";

  
const Home = () => {
  return (
    <>
    <PageWrapper>
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
          <HeroImg />
          {/* <Image src="/heroimg.png" alt="" width={600} height={600} className={styles.heroImg} /> */}
        </div>
      </div>
      
    <About />

    </div>
    </PageWrapper>
    </>
  );
};

export default Home;