import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.css"
import { auth } from "../lib/auth";

const Navbar = async () => {

  const session = await auth();

  return (
    <div className={styles.container}>
  <Link href="/">
    <img src="/logo.png" alt="Class Connect" className={styles.logo} width="289" height="81"/>
  </Link>
  <div>
        <Links session={session}/>
      </div>
    </div>
  )
}

export default Navbar