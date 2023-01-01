// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADm54YnNg_e6uybaaDoMdKZqag0nrkGew",
  authDomain: "chatapp-2d5a0.firebaseapp.com",
  projectId: "chatapp-2d5a0",
  storageBucket: "chatapp-2d5a0.appspot.com",
  messagingSenderId: "398612804887",
  appId: "1:398612804887:web:f47b285f504d9ea4c07352",
  measurementId: "G-HLRBEBZ4JZ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Authentication
export const auth = getAuth(app);
// Initialize firebase Database
export const db = getFirestore(app);
// Initialize Storage
export const storage = getStorage(app);
