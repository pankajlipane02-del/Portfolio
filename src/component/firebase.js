// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAX7V5kgVqoXgpnU0dvfLxNJhZyyPxo9LY",
  authDomain: "portfolio-5f773.firebaseapp.com",
  projectId: "portfolio-5f773",
  storageBucket: "portfolio-5f773.firebasestorage.app",
  messagingSenderId: "604445775231",
  appId: "1:604445775231:web:147d19aa582c516d3ef64a",
  measurementId: "G-6PTV4BYVQ7"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);