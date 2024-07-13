import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBP0HtSQSjVJ2dGka83d8AeZixAlGftoJU",
    authDomain: "realtime-db262.firebaseapp.com",
    projectId: "realtime-db262",
    storageBucket: "realtime-db262.appspot.com",
    messagingSenderId: "365459168476",
    appId: "1:365459168476:web:3044ca63142eb60c00a819",
    measurementId: "G-5ZLYSZKW1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
