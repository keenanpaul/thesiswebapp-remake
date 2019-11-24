import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyBtTxK18F0vceu8VPkvJLNrVkCasPhTVL4",
  authDomain: "tabang-3cdeb.firebaseapp.com",
  databaseURL: "https://tabang-3cdeb.firebaseio.com",
  projectId: "tabang-3cdeb",
  storageBucket: "tabang-3cdeb.appspot.com",
  messagingSenderId: "1027355725622",
  appId: "1:1027355725622:web:3903bcdbd199877663ed97"
};

firebase.initializeApp(config);
const firestore = firebase.firestore();

export default firestore;
