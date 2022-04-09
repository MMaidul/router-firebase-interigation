import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDlPaqwJJVWvICP-WLbm-89vYhKRn1a3Jg",
  authDomain: "router-firebase-interigation.firebaseapp.com",
  projectId: "router-firebase-interigation",
  storageBucket: "router-firebase-interigation.appspot.com",
  messagingSenderId: "68718926488",
  appId: "1:68718926488:web:7382c1de9ac51392b9ceed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;