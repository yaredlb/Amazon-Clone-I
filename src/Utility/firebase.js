import firebase from "firebase/compat/app";
// authentication
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCua39XrhGeYtd2mW88XOQZAt87pRtYMD0",
  authDomain: "clone-amzn-ylb.firebaseapp.com",
  projectId: "clone-amzn-ylb",
  storageBucket: "clone-amzn-ylb.appspot.com",
  messagingSenderId: "250431391473",
  appId: "1:250431391473:web:031ecbeca3d2d659208b50"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();