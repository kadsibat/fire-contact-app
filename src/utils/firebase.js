
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4cSmvAoxcChU7ruG_-BVU5Puattbq9qk",
    authDomain: "fire-base-contact-99c8e.firebaseapp.com",
    databaseURL: "https://fire-base-contact-99c8e-default-rtdb.firebaseio.com",
    projectId: "fire-base-contact-99c8e",
    storageBucket: "fire-base-contact-99c8e.appspot.com",
    messagingSenderId: "955702998228",
    appId: "1:955702998228:web:3f35717970cf46fd27f741"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;