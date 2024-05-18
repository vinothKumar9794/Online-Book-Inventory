// import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
// import { initializeAuth } from 'firebase/app';


import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC7SZUhd9DNTn9vPEbL7g-Yr6-05Ae54S4",
  authDomain: "mern-book-inventory-65bad.firebaseapp.com",
  projectId: "mern-book-inventory-65bad",
  storageBucket: "mern-book-inventory-65bad.appspot.com",
  messagingSenderId: "621486368951",
  appId: "1:621486368951:web:cf1c7509be3b502484c532"
};


const app = firebase.initializeApp(firebaseConfig);
// auth = initializeAuth(app)

// export default auth;
export const database = getAuth(app);

export default app;