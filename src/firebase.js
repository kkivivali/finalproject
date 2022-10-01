// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
require('dotenv').config()

const apiKey = process.env.API_KEY

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "finalproject-sda.firebaseapp.com",
  projectId: "finalproject-sda",
  storageBucket: "finalproject-sda.appspot.com",
  messagingSenderId: "157992375236",
  appId: "1:157992375236:web:9ee3b8a11dd72109dd0a91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app