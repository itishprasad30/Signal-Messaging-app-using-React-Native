// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "siganl-clone-52ead.firebaseapp.com",
  projectId: "siganl-clone-52ead",
  storageBucket: "siganl-clone-52ead.appspot.com",
  messagingSenderId: "359991442479",
  appId: "1:359991442479:web:c54a30de02614deaea1ada",
  measurementId: "G-YVXQE5RJL9",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const db = app.firestore();

const auth = firebase.auth();

export { db, auth };
