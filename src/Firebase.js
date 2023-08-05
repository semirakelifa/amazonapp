
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgs3a51YqMLdg4rlNIN_oJMSOXq39h74w",
  authDomain: "clone-2c53e.firebaseapp.com",
  databaseURL: "https://clone-2c53e-default-rtdb.firebaseio.com",
  projectId: "clone-2c53e",
  storageBucket: "clone-2c53e.appspot.com",
  messagingSenderId: "992355991453",
  appId: "1:992355991453:web:3de3505e088857cec4f974",
  measurementId: "G-03J3ELSSGK"
};

// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);
const auth =firebase.auth();
const db=app.firestore()

 export {auth ,db};
