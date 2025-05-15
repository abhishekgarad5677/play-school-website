// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEkcMykYH7_hFSZriCQB8diHIb8rNBSVM",
  authDomain: "playschool-d0d02.firebaseapp.com",
  projectId: "playschool-d0d02",
  storageBucket: "playschool-d0d02.firebasestorage.app",
  messagingSenderId: "487054130459",
  appId: "1:487054130459:web:57aa188f933390cf4a67be",
  measurementId: "G-EX5XX1MJTY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics, logEvent };
