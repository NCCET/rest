// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyDh0_o17uRZnnvyYPVqbi3IjroB40lfZXA",
  authDomain: "restuarant-app-e0125.firebaseapp.com",
  projectId: "restuarant-app-e0125",
  storageBucket: "restuarant-app-e0125.appspot.com",
  messagingSenderId: "596658903574",
  appId: "1:596658903574:web:73cea79eec74e843253337",
  measurementId: "G-HC7YDHBGG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {auth, db, storage}