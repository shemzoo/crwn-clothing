import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjbGQomoABeaouQDq-BkyDX4IKDYTiVpU",
  authDomain: "crwn-clothing-db-16026.firebaseapp.com",
  projectId: "crwn-clothing-db-16026",
  storageBucket: "crwn-clothing-db-16026.firebasestorage.app",
  messagingSenderId: "944945443845",
  appId: "1:944945443845:web:88cccb296ddfacfb15186c",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailandPassword = async (
  email,
  password
) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
