import firebase from 'firebase'
import 'firebase/auth';
import 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyAHeKjq9rLhLJTseElT9NZ9KQwtSJtAJyoapi-key',
    authDomain: 'biflow-efa49.firebaseapp.com',
    databaseURL: 'https://biflow-efa49.firebaseio.com',
    projectId: 'biflow-efa49',
    storageBucket: 'biflow-efa49.appspot.com',
    messagingSenderId: '257343919180',
    appId: '1:257343919180:ios:603a501b21fac6814c90e9',
    measurementId: 'G-measurement-id',
  };
  

  

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  export {firebase}; 

  

  


