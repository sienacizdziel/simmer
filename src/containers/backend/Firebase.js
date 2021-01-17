import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCjO5G0GcNPneTrBdracN1X6LSBDFAU7es",
    authDomain: "simmer-hackthenorth.firebaseapp.com",
    databaseURL: "https://simmer-hackthenorth-default-rtdb.firebaseio.com",
    projectId: "simmer-hackthenorth",
    storageBucket: "simmer-hackthenorth.appspot.com",
    messagingSenderId: "980809921947",
    appId: "1:980809921947:web:bfe55452134d18e0a39d3e",
    measurementId: "G-D0JRLHDVNQ"
  };

firebase.initializeApp(config);
export default firebase;