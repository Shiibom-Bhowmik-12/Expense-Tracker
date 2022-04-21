// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD9Ea2baZcNE3aqiGrLBMwurW8_Vn5oSg",
  authDomain: "expensetracker-5808c.firebaseapp.com",
  projectId: "expensetracker-5808c",
  storageBucket: "expensetracker-5808c.appspot.com",
  messagingSenderId: "448451732513",
  appId: "1:448451732513:web:ed0356d81d286688156f60"
};

// Initialize Firebase
const app=firebase.initializeApp(firebaseConfig);
const auth=firebase.auth();
export {auth}
