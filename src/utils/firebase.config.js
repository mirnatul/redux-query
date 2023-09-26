import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAXlyIDypDu34I10l3SLgQYicuV_NXZuNw",
  authDomain: "the-news-dragon-586a4.firebaseapp.com",
  projectId: "the-news-dragon-586a4",
  storageBucket: "the-news-dragon-586a4.appspot.com",
  messagingSenderId: "999116415735",
  appId: "1:999116415735:web:314b4c2bae35ac1ba5a9f2"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
