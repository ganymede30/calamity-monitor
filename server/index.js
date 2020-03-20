// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyAa7LwwdgwBM-XvznciDXr0STFPlYwVQYA",
    authDomain: "calamity-monitor.firebaseapp.com",
    databaseURL: "https://calamity-monitor.firebaseio.com",
    projectId: "calamity-monitor",
    storageBucket: "calamity-monitor.appspot.com",
    messagingSenderId: "509195747929",
    appId: "1:509195747929:web:e9c9727e5e2bd63a4f2748",
    measurementId: "G-WZMMMKV3D1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();