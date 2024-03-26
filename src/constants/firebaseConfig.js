// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoO48Dk-1tR-bi_esF9Yqee90DBI01lVc",
  authDomain: "flex-logistics-dc7dd.firebaseapp.com",
  projectId: "flex-logistics-dc7dd",
  storageBucket: "flex-logistics-dc7dd.appspot.com",
  messagingSenderId: "717550115099",
  appId: "1:717550115099:web:af2eb04e696ae00a99dbbe",
  measurementId: "G-G8H9MWR958",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get Firebase auth instance
const auth = getAuth(app);
export { auth };
