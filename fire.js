import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCL4YNsi9ipPrHE3V8DlgDUDN7OVf4wSow",
    authDomain: "register-log.firebaseapp.com",
    projectId: "register-log",
    storageBucket: "register-log.appspot.com",
    messagingSenderId: "166256117570",
    appId: "1:166256117570:web:2a7250f1b8736ed3c92adb",
    measurementId: "G-0C4J7P8GZW"
  };
  // Initialize Firebase
  const fire= firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default fire