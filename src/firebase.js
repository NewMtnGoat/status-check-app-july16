// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBhuxTI33uevmKhfZ379YV_eWln1PqITnU",
  authDomain: "statuscheckjuly16.firebaseapp.com",
  projectId: "statuscheckjuly16",
  storageBucket: "statuscheckjuly16.appspot.com",
  messagingSenderId: "986486684578",
  appId: "1:986486684578:web:6efbd54dad7855e6d850fb",
  measurementId: "G-15MYRMYQHJ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);