import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhWpIwVISyq5rLqdfnXgtQ5hj-6l7KkvU",
  authDomain: "prepwise-e9882.firebaseapp.com",
  projectId: "prepwise-e9882",
  storageBucket: "prepwise-e9882.firebasestorage.app",
  messagingSenderId: "47535344276",
  appId: "1:47535344276:web:e4d8f27eae7d2a6bd04281",
  measurementId: "G-S2CXRWDN1F",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
