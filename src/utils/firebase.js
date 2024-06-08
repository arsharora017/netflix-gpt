// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE16PZ7-UkdCDvyaR72BGKVuZgsBkakls",
  authDomain: "netflixgpt-73ff7.firebaseapp.com",
  projectId: "netflixgpt-73ff7",
  storageBucket: "netflixgpt-73ff7.appspot.com",
  messagingSenderId: "975662131923",
  appId: "1:975662131923:web:120b2428075d40a4430226",
  measurementId: "G-J648FE3M6T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
