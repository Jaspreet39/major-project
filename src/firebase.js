import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCml3u6sKFdJppybLkh8eu2gS_KyZ5fKFY",
  authDomain: "project-1d83f.firebaseapp.com",
  projectId: "project-1d83f",
  storageBucket: "project-1d83f.appspot.com",
  messagingSenderId: "415312746370",
  appId: "1:415312746370:web:da535f80131370ed0c219b",
};

const app = firebase.initializeApp(firebaseConfig);

var db = app.firestore();
var Storage = app.storage();

var auth = app.auth();
// var provider = new firebase.auth.GoogleAuthProvider();

export { Storage, db, auth };
