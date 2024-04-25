import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVBd9zpTzetQAW-tPUOwk5at2jnb5KLDo",
  authDomain: "workout-app-b0aab.firebaseapp.com",
  projectId: "workout-app-b0aab",
  storageBucket: "workout-app-b0aab.appspot.com",
  messagingSenderId: "308442561039",
  appId: "1:308442561039:web:2df4398de031e8cb1a817a",
  measurementId: "G-0NW3B00G8H",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
