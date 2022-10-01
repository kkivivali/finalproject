// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-D-7mzK-s5RMpjr5RXSjieW_x8oHszdo",
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