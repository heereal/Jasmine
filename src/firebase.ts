// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCSJvegxqx2PvoNtITRNONt-xTwcQn-9SY',
  authDomain: 'project-jasmine-38203.firebaseapp.com',
  projectId: 'project-jasmine-38203',
  storageBucket: 'project-jasmine-38203.appspot.com',
  messagingSenderId: '1074581253284',
  appId: '1:1074581253284:web:e5cd3087162929b01c8a31',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
