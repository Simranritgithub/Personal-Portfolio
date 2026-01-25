import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDONTTx33Qim3pYiXE0dU_PkkL8AkkoXIs",
  authDomain: "portfoliovisitorcount.firebaseapp.com",
  projectId: "portfoliovisitorcount",
  storageBucket: "portfoliovisitorcount.firebasestorage.app",
  messagingSenderId: "679931437181",
  appId: "1:679931437181:web:35c8ce5d966f7366711114"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
