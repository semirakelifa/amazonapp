
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCC3ylBbCs9vH45UvqVRkqGqfo43_2cqSA",
  authDomain: "react-clone-51612.firebaseapp.com",
  projectId: "react-clone-51612",
  storageBucket: "react-clone-51612.appspot.com",
  messagingSenderId: "675173174695",
  appId: "1:675173174695:web:9799a6361c17e783e7ba82",
  measurementId: "G-VBPV5Q75TS",
};

// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);
const auth =firebase.auth();
const db=app.firestore()

 export {auth ,db};
