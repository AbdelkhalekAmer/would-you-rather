import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './Store';
import { BrowserRouter as Router } from 'react-router-dom'

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC3vAO7EV5iIbYaCxyZMuwhDhpCrkTaHm8",
//   authDomain: "would-you-rather-abdelkhalek.firebaseapp.com",
//   projectId: "would-you-rather-abdelkhalek",
//   storageBucket: "would-you-rather-abdelkhalek.appspot.com",
//   messagingSenderId: "329146343273",
//   appId: "1:329146343273:web:f012e49f934e91f66fa7f8",
//   measurementId: "G-J4662SDQKK"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);