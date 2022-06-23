// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth' ;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7UW7WCPd8QW-YzmEe5jkMgNUe6V1r4OE",
  authDomain: "ema-jhon-simple-31d73.firebaseapp.com",
  projectId: "ema-jhon-simple-31d73",
  storageBucket: "ema-jhon-simple-31d73.appspot.com",
  messagingSenderId: "93046860313",
  appId: "1:93046860313:web:bdab7e3659f96b2582d888"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app) ;

export default auth ;