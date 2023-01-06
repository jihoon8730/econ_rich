import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6yM8qXurpqclhP2dKz6KvwjrQlVh_jt8",
  authDomain: "ecorich-ec71a.firebaseapp.com",
  projectId: "ecorich-ec71a",
  storageBucket: "ecorich-ec71a.appspot.com",
  messagingSenderId: "873025407242",
  appId: "1:873025407242:web:dae8f153486fd8819952f3",
};

const app = initializeApp(firebaseConfig);

export const authService = getAuth();

export default app;
