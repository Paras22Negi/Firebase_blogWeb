// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgdX2PeK0S0ibXqT8Kkzo9aDiMpYUmSr0",
  authDomain: "reactnew-8797c.firebaseapp.com",
  projectId: "reactnew-8797c",
  storageBucket: "reactnew-8797c.firebasestorage.app",
  messagingSenderId: "686514996559",
  appId: "1:686514996559:web:f12bdb96c13231cb04f13a",
};

import { getDatabase } from "firebase/database";

// Initialize Firebase
const BlogWeb = initializeApp(firebaseConfig);
import { getAuth } from "firebase/auth";

export const auth = getAuth(BlogWeb)
export const db = getDatabase(BlogWeb)

// Export the initialized app so other modules can use it (and keep a default export for convenience)
export default BlogWeb;
export { BlogWeb };