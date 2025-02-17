// Import Firebase SDK
// Your Firebase Configuration

import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBG16zqbRPj_cs8sngcgK-Hf32ZKvIWh-4",
    authDomain: "cnlc-32308.firebaseapp.com",
    projectId: "cnlc-32308",
    storageBucket: "cnlc-32308.appspot.com",
    messagingSenderId: "602355384373",
    appId: "1:602355384373:web:1732befd9003ccc0e5317c",
    measurementId: "G-BCQ952D6XV"
  };

// Ensure Firebase is initialized only once in Next.js
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };