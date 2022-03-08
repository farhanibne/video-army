import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyA8suRyJkT61EMxTM6E8ZWZgit5NzaX7mc",
  authDomain: "video-army.firebaseapp.com",
  databaseURL: "https://video-army-default-rtdb.firebaseio.com",
  projectId: "video-army",
  storageBucket: "video-army.appspot.com",
  messagingSenderId: "656377820211",
  appId: "1:656377820211:web:b4f0a24f84521822059f46",
  measurementId: "G-GP7Y49HHLN"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
