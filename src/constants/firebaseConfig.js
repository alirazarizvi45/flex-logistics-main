// // Import the functions you need from the SDKs you need

// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";
// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCwutXkkGB0boaYpr8owaEGG5iUKHQZ2Os",
//   authDomain: "flex-logistics-1709552555929.firebaseapp.com",
//   projectId: "flex-logistics-1709552555929",
//   storageBucket: "flex-logistics-1709552555929.appspot.com",
//   messagingSenderId: "480043356372",
//   appId: "1:480043356372:web:2ece2fa47c6687cd062b41",
//   measurementId: "G-NXB6YVV79D",
//   dataBaseUrl:
//     "https://flex-logistics-1709552555929-default-rtdb.firebaseio.com/",
// };

// // Initialize Firebaseconst app = initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
// const firebaseDb = getFirestore(app);
// const auth = getAuth(app);
// const firebaseStorage = getStorage(app);
// const db = getDatabase(app);
// export { firebaseDb, auth, firebaseStorage, db };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDteaY0BhVcDnK87ZD15Zu1ppsSP0brbJ0",
  authDomain: "flex-9f2a7.firebaseapp.com",
  projectId: "flex-9f2a7",
  storageBucket: "flex-9f2a7.appspot.com",
  messagingSenderId: "185065891650",
  appId: "1:185065891650:web:2e707deff6e5d202754adb",
  measurementId: "G-3NKLJD912Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const firebaseDb = getFirestore(app);

export { auth, analytics, firebaseDb };
