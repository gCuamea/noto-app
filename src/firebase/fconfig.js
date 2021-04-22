import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD5JTJMuq3B_q-m__ZxjYYSh9j96S_BXhE',
  authDomain: 'todoers-app.firebaseapp.com',
  projectId: 'todoers-app',
  storageBucket: 'todoers-app.appspot.com',
  messagingSenderId: '625691589779',
  appId: '1:625691589779:web:a3ae5cd8f3957e219ae166',
  measurementId: 'G-22CVBK5WWT',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
