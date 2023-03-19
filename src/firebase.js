// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import "firebase/compat/database";
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAHSnLhzD2U5Wu-Q-ljwkatozm_5Lf2JU4",
    authDomain: "slack-react-c443a.firebaseapp.com",
    projectId: "slack-react-c443a",
    storageBucket: "slack-react-c443a.appspot.com",
    messagingSenderId: "684732392225",
    appId: "1:684732392225:web:e56e708b8eb5ade1a69460",
    measurementId: "G-HDL7XNDLBP"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); 

export { auth, provider };
export default db;