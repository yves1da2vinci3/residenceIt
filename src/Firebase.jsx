// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL1JRK5eU6P6b-Rs1VypVf-9Di11Lz-dU",
  authDomain: "residenceit-348614.firebaseapp.com",
  projectId: "residenceit-348614",
  storageBucket: "residenceit-348614.appspot.com",
  messagingSenderId: "517745505002",
  appId: "1:517745505002:web:38fff02a13ba52d7b11d93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)

export {storage}