// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVBd9zpTzetQAW-tPUOwk5at2jnb5KLDo",
  authDomain: "workout-app-b0aab.firebaseapp.com",
  projectId: "workout-app-b0aab",
  storageBucket: "workout-app-b0aab.appspot.com",
  messagingSenderId: "308442561039",
  appId: "1:308442561039:web:2df4398de031e8cb1a817a",
  measurementId: "G-0NW3B00G8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const fire=getFirestore(app)