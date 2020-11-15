import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDqjWUUdZcKmC3iBEvkxNEZN9su_SCRJug",
  authDomain: "discord-00.firebaseapp.com",
  databaseURL: "https://discord-00.firebaseio.com",
  projectId: "discord-00",
  storageBucket: "discord-00.appspot.com",
  messagingSenderId: "1074155428190",
  appId: "1:1074155428190:web:6e8d15e3628412cc1757cf",
  measurementId: "G-CFPRW7EE7R",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
