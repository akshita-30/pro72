import firebase from 'firebase';
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyClzGeWrh-2ObT_otd9s4y8KHlMgKJhGtU",
  authDomain: "story-hub-98c4e.firebaseapp.com",
  projectId: "story-hub-98c4e",
  storageBucket: "story-hub-98c4e.appspot.com",
  messagingSenderId: "70257801136",
  appId: "1:70257801136:web:c1ecac3016392ac4a14875",
  measurementId: "G-XZNYYZJMFG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();