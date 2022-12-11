// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYJxBXMYV7iYIf5ig3hpG0cTC2V8-3xVU",
  authDomain: "ibtissam-car.firebaseapp.com",
  projectId: "ibtissam-car",
  storageBucket: "ibtissam-car.appspot.com",
  messagingSenderId: "893031583817",
  appId: "1:893031583817:web:9c4b8f8afde03b40ea2f98",
  measurementId: "G-05Q9WFF60S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;