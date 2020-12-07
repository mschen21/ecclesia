import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDlo-EyIzOWur_ktmt_te5AlfaBoqlJOAw",
  authDomain: "ecclesia-care.firebaseapp.com",
  databaseURL: "https://ecclesia-care.firebaseio.com",
  projectId: "ecclesia-care",
  storageBucket: "ecclesia-care.appspot.com",
  messagingSenderId: "861092332114",
  appId: "1:861092332114:web:1d06fa6af3edb40b23d58b",
  measurementId: "G-4NP110BFWC",
};
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}
const fire = firebase;
export default fire;
