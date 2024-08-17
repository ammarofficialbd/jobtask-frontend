// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ-CrfKvMdVlGfx9PfC0ncdpgDUsrulj4",
  authDomain: "prducts-page.firebaseapp.com",
  projectId: "prducts-page",
  storageBucket: "prducts-page.appspot.com",
  messagingSenderId: "463617906599",
  appId: "1:463617906599:web:3f0b52637b63515ce90882"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };