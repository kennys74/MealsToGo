import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwngFV004fsBwvIArweqy0st0V3-jEYA4",
  authDomain: "mealstogo-9e7b8.firebaseapp.com",
  projectId: "mealstogo-9e7b8",
  storageBucket: "mealstogo-9e7b8.appspot.com",
  messagingSenderId: "322033475262",
  appId: "1:322033475262:web:684f5194e8029ce960c8ef",
};

//getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

if (!getApps().length) {
  var app = initializeApp(firebaseConfig);
} else {
  var app = getApp();
}

export const authentication = getAuth(app);
