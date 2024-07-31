// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "cc-hub-45f02.firebaseapp.com",
  projectId: "cc-hub-45f02",
  storageBucket: "cc-hub-45f02.appspot.com",
  messagingSenderId: "809158209365",
  appId: "1:809158209365:web:f489ea9208cbec302d89dc",
  measurementId: "G-8M0W03NJ8F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
