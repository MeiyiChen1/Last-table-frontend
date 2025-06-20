import Constants from "expo-constants";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Change these settings to match whichever database we are going to use
// (This is mine for now)
const firebaseConfig = {
  apiKey: Constants.manifest?.extra?.firebaseApiKey,
  authDomain: Constants.manifest?.extra?.firebaseAuthDomain,
  projectId: Constants.manifest?.extra?.firebaseProjectId,
  storageBucket: Constants.manifest?.extra?.firebaseStorageBucket,
  messagingSenderId: Constants.manifest?.extra?.firebaseMessagingSenderId,
  appId: Constants.manifest?.extra?.firebaseAppId,
  measurementId: "G-TE7K3BFZT7",
};

const app = initializeApp(firebaseConfig);
export default app;

export const auth = getAuth(app);
