import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import Image from "next/image";

const Navbar = async () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Class Connect"
          className={styles.logo}
          width="289"
          height="81"
        />
      </Link>
      <div>
        <Links/>
      </div>
    </div>
  );
};

export default Navbar;
