// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase} from 'firebase/database'
import{getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrdL3cD6HNlpYtWSwQyCM67pSyZPhN-OE",
  authDomain: "luminis-902d8.firebaseapp.com",
  projectId: "luminis-902d8",
  storageBucket: "luminis-902d8.firebasestorage.app",
  messagingSenderId: "595604116076",
  appId: "1:595604116076:web:0a271736816301e64e3e49",
  measurementId: "G-NN5HW4FPYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getDatabase(app);
export const auth=getAuth(app);