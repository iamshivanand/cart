import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBFXE7MzcifUO9AUrYPdwZZjRwknoS4M7k",
  authDomain: "cart-59f54.firebaseapp.com",
  databaseURL: "https://cart-59f54.firebaseio.com",
  projectId: "cart-59f54",
  storageBucket: "cart-59f54.appspot.com",
  messagingSenderId: "955582138584",
  appId: "1:955582138584:web:d8686170bd1fe22065efad"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



