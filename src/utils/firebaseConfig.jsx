// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQZlVVHnG8qhIMCLlIvCN25wKm0ozwuRs",
  authDomain: "playschool-website.firebaseapp.com",
  projectId: "playschool-website",
  storageBucket: "playschool-website.firebasestorage.app",
  messagingSenderId: "432407751097",
  appId: "1:432407751097:web:0b839b1a2e7993bf1eee68",
  measurementId: "G-VFQC6CEL3C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { analytics, logEvent, auth, googleProvider };
