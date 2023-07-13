import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA8_uHq82y2A2hqin9I6O3x5jzVbcmBFuA",
  authDomain: "eshkon-a.firebaseapp.com",
  projectId: "eshkon-a",
  storageBucket: "eshkon-a.appspot.com",
  messagingSenderId: "260183292247",
  appId: "1:260183292247:web:5a0fcf600aec0775246612"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;