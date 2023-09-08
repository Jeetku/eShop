import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyD_MgE8i-6nqs5aEyybpNkWb02c-QDPyTc",
  authDomain: "eshop-191ec.firebaseapp.com",
  projectId: "eshop-191ec",
  storageBucket: "eshop-191ec.appspot.com",
  messagingSenderId: "193745237464",
  appId: "1:193745237464:web:fd7f285f31489f96056ead",
  measurementId: "G-0HES5SM1WT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
// const analytics = getAnalytics(app);
