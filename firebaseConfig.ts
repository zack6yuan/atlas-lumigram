// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEp9k_b2tgSVaAVyJzzuE_Khp3vtXePBA",
  authDomain: "lumigram-b24cd.firebaseapp.com",
  projectId: "lumigram-b24cd",
  storageBucket: "lumigram-b24cd.firebasestorage.app",
  messagingSenderId: "208850175129",
  appId: "1:208850175129:web:7bb3f70d6962469cc3e408",
  measurementId: "G-LZ8DRPS3C9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Auth
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const storage = getStorage(app);

export const db = getFirestore(app);