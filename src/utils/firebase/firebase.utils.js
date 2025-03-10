import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjbGQomoABeaouQDq-BkyDX4IKDYTiVpU",
  authDomain: "crwn-clothing-db-16026.firebaseapp.com",
  projectId: "crwn-clothing-db-16026",
  storageBucket: "crwn-clothing-db-16026.firebasestorage.app",
  messagingSenderId: "944945443845",
  appId: "1:944945443845:web:88cccb296ddfacfb15186c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, provider);
