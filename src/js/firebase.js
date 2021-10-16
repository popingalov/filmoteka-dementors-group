import * as firebase from 'firebase/app';
import {initializeApp} from 'firebase/app';
import 'firebase/database';
import 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

const firebaseConfig = {
  apiKey: 'AIzaSyCKMwvZ2d9rJQsO0LnV6IaQSle_I48uM-I',
  authDomain: 'filmoteka-dementors-group.firebaseapp.com',
  databaseURL: 'https://filmoteka-dementors-group-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'filmoteka-dementors-group',
  storageBucket: 'filmoteka-dementors-group.appspot.com',
  messagingSenderId: '1090691512409',
  appId: '1:1090691512409:web:ad662cc748268f6a71d948',
  measurementId: 'G-HVVFEHNXDE',
};

firebase.initializeApp(firebaseConfig);


const ui = new firebaseui.auth.AuthUI(firebase.auth());