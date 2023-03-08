// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL8C9SHwk1Orw1mWHPzUQEyaPu6xIt9YI",
  authDomain: "techspace-9a698.firebaseapp.com",
  projectId: "techspace-9a698",
  storageBucket: "techspace-9a698.appspot.com",
  messagingSenderId: "216751198702",
  appId: "1:216751198702:web:112813b574d66d6f53beff",
  measurementId: "G-PJ519CXZH3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
