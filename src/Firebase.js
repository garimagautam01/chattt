import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth" ;
import { getStorage } from "firebase/storage" ;
import { getFirestore } from "firebase/firestore" ;


const firebaseConfig = {
  apiKey: "AIzaSyCD0-e0NG0MvpcQh_eYz-hYYKTF0mk5NPI",
  authDomain: "chat-d85a0.firebaseapp.com",
  projectId: "chat-d85a0",
  storageBucket: "chat-d85a0.appspot.com",
  messagingSenderId: "752492465964",
  appId: "1:752492465964:web:8789d572942c28e1d7e689"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db= getFirestore();