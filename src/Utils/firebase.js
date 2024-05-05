// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGRnNOW6eI2aUxa-d7RSe7S_2-0NOPLJ4",
  authDomain: "horsy-glide.firebaseapp.com",
  projectId: "horsy-glide",
  storageBucket: "horsy-glide.appspot.com",
  messagingSenderId: "400822342428",
  appId: "1:400822342428:web:391b36b6e4e6d8f9bf20d9",
  measurementId: "G-TGSS0CNFH5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();