// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJDi-s4yAblGL00C_Vdbi7NSVoU51XAAY",
  authDomain: "the-book-store-2a5c7.firebaseapp.com",
  projectId: "the-book-store-2a5c7",
  storageBucket: "the-book-store-2a5c7.appspot.com",
  messagingSenderId: "129464826756",
  appId: "1:129464826756:web:5251a6c96ad4eeb82f7bd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app