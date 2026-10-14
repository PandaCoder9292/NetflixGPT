// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtoClTheXWjz346WNpNnXpyHlB1O1yiV0",
  authDomain: "netflixgpt-49d5c.firebaseapp.com",
  projectId: "netflixgpt-49d5c",
  storageBucket: "netflixgpt-49d5c.firebasestorage.app",
  messagingSenderId: "282347488112",
  appId: "1:282347488112:web:1f0f6b6a9fd5bbb75e05b5",
  measurementId: "G-KY9EKLJDB4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
