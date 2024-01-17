
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMD9jsSz90j5VGyg7Xg0L6Fox5FmNiQWA",
    authDomain: "photofolio-8438c.firebaseapp.com",
    projectId: "photofolio-8438c",
    storageBucket: "photofolio-8438c.appspot.com",
    messagingSenderId: "398067186372",
    appId: "1:398067186372:web:276dcf2ced9127208c6791"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
