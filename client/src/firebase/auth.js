import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export const createUser = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
}

export const logInUser = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
}

export const doSignOut = async () => {
  localStorage.clear();
  return auth.signOut();
}