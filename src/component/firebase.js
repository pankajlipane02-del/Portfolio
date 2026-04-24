// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
 
 

const firebaseConfig = {
  apiKey: "AIzaSyAX7V5kgVqoXgpnU0dvfLxNJhZyyPxo9LY",
  authDomain: "portfolio-5f773.firebaseapp.com",
  databaseURL: "https://portfolio-5f773-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "portfolio-5f773",
  storageBucket: "portfolio-5f773.appspot.com",
  messagingSenderId: "604445775231",
  appId: "1:604445775231:web:147d19aa582c516d3ef64a",
  measurementId: "G-6PTV4BYVQ7"
};
const app = initializeApp(firebaseConfig);
 
export const db = getDatabase(app);
 