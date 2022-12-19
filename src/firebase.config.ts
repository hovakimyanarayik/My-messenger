import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from '@firebase/firestore'
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "my-messenger-2ba32.firebaseapp.com",
  projectId: "my-messenger-2ba32",
  storageBucket: "my-messenger-2ba32.appspot.com",
  messagingSenderId: "766409549048",
  appId: "1:766409549048:web:768e5bac02e2def43d870d"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app);