// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvAkPTh0JUV9S09buxqTNMnUqHYFRT3Lo",
  authDomain: "creativehi-demo.firebaseapp.com",
  projectId: "creativehi-demo",
  storageBucket: "creativehi-demo.appspot.com",
  messagingSenderId: "880827332249",
  appId: "1:880827332249:web:03c31344fafb0150cbaa08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);