// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
console.log(import.meta.env.VITE_FIREBASE_API_KEY)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "vertual-dressing-room.firebaseapp.com",
  projectId: "vertual-dressing-room",
  storageBucket: "vertual-dressing-room.appspot.com",
  messagingSenderId: "711862903529",
  appId: "1:711862903529:web:8571dc3311e5ab8f744678"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);