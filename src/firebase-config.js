// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7UiCGW6H1d45E8RjC_2aNASrUvBBA2d0",
  authDomain: "chatapp-bdf92.firebaseapp.com",
  projectId: "chatapp-bdf92",
  storageBucket: "chatapp-bdf92.appspot.com",
  messagingSenderId: "899026133932",
  appId: "1:899026133932:web:56f93c1e9eedeeff525009"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();