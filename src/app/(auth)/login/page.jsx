'use client'

import styles from "./login.module.css";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {auth} from '../../config/firebaseConfig'


const LoginPage = () => {

  const handleGoogle = async (e) => {
    const provider = await new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>feature scheduled for push 3.3.1 </h1>

        <button onClick={handleGoogle} className={styles.loginWithGoogleBtn}>
          Sign in with Google
        </button>
        
      </div>
    </div>
  );
};

export default LoginPage;