import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { signInWithEmailAndPassword, signInWithEmailLink } from "firebase/auth";

let app, database;
main();

async function init() {
  console.log("Initializing firebase");
  const firebaseConfig = {
    apiKey: "AIzaSyA7qsYvpOa1IULWfMuDIxyykKpm2X7YVzY",
    authDomain: "e-learning-team-v.firebaseapp.com",
    databaseURL:
      "https://e-learning-team-v-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "e-learning-team-v",
    storageBucket: "e-learning-team-v.appspot.com",
    messagingSenderId: "580498769693",
    appId: "1:580498769693:web:f5d689fa48855449dec3f4",
    measurementId: "G-WC8WX8RV1J",
  };
  try {
    app = initializeApp(firebaseConfig);
    console.log("Initialized and connected with firebase App.");
    return 1;
  } catch (error) {
    console.log("Failed to Initialize and connect with firebase App: ", error);
    return 0;
  }
}

async function connectFirestore() {
  console.log("Connecting to firestore");
  try {
    database = getFirestore(app);
    console.log("Connected with firestore database sucessfully");
    return 1;
  } catch (error) {
    console.log("Failed to Connect with firestore database: ", error);
    return 0;
  }
}

async function createStudent(data) {
  console.log("Sending Email Link to student for creating New Account: ", data);

  try {
    const auth = getAuth(app);
    const actionCodeSettings = {
      // URL to redirect the user to after they've signed in
      url: "http://localhost:5173/",
      // Handle email link on iOS and Android devices
      handleCodeInApp: true,
    };
    await signInWithEmailLink(auth, data.email, actionCodeSettings);
    return 1;
  } catch (error) {
    console.log("Failed to sent Sign in link to Email: ", error);
    return 0;
  }
}

async function main() {
  await init();
  await connectFirestore();

  //   console.log(app, database);
}

export { createStudent };
