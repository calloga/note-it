import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDxzNrA-bys6hzcAUwbCqXEvmqu4t00-l8",
  authDomain: "note-it-2054e.firebaseapp.com",
  projectId: "note-it-2054e",
  storageBucket: "note-it-2054e.appspot.com",
  messagingSenderId: "1087974583519",
  appId: "1:1087974583519:web:7b4eb3dfacabcc7fb10d6a",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
