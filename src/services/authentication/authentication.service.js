import { getApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(getAuth(getApp()), email, password);

export const registerRequest = (email, password) =>
  createUserWithEmailAndPassword(getAuth(getApp()), email, password);

export const signOutRequest = () => signOut(getAuth(getApp()));
