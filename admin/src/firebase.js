import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD-3biBKd-VWQqPTSs1O_qTi6hBMISvstk",
  authDomain: "netflix-15496.firebaseapp.com",
  projectId: "netflix-15496",
  storageBucket: "netflix-15496.appspot.com",
  messagingSenderId: "219965278040",
  appId: "1:219965278040:web:a0bc74380f038f5883c72d",
  measurementId: "G-QGDVMRHTXZ",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export default storage;
