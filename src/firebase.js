// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBHlLdmea4enBt72TD7I38U3COTiF0Ei8M",
  authDomain: "fir-1cfe0.firebaseapp.com",
  projectId: "fir-1cfe0",
  storageBucket: "fir-1cfe0.appspot.com",
  messagingSenderId: "979146656491",
  appId: "1:979146656491:web:3a0a62c06ce40d9c0e8cae",
  measurementId: "G-8ECNB4G3J9"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)

export {auth,  db} 