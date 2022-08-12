// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPre2KizKDsnyw3FlZsD920cdXMYQGAb0",
  authDomain: "deploy-3fbc9.firebaseapp.com",
  projectId: "deploy-3fbc9",
  storageBucket: "deploy-3fbc9.appspot.com",
  messagingSenderId: "594356425069",
  appId: "1:594356425069:web:d853f2b1e19ff768d30a64",
  measurementId: "G-C85GDG9W96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);