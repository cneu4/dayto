import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCfsrWxrVv-j4Vc_LfcBPyVVwmMzopLdx0",
  authDomain: "daytopat-add83.firebaseapp.com",
  projectId: "daytopat-add83",
  storageBucket: "daytopat-add83.appspot.com",
  messagingSenderId: "446229225547",
  appId: "1:446229225547:web:137f869dfbe5de13302dce"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export const auth = getAuth(app);
export { db };
