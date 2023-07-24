import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,  } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhnWQg0E153UQ1zIneykyheh7G_yBWEoM",
  authDomain: "passwordless-nextauth.firebaseapp.com",
  projectId: "passwordless-nextauth",
  storageBucket: "passwordless-nextauth.appspot.com",
  messagingSenderId: "930566196759",
  appId: "1:930566196759:web:9aa2cda6065c43d9ab9652"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth }