import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDbVBaE70BbTDJc8CBnNeF6lHepOjFPNBM",
    authDomain: "twitter-clone-48b64.firebaseapp.com",
    databaseURL: "https://twitter-clone-48b64.firebaseio.com",
    projectId: "twitter-clone-48b64",
    storageBucket: "twitter-clone-48b64.appspot.com",
    messagingSenderId: "506145829674",
    appId: "1:506145829674:web:79ffa58294bdd61fb3e453",
    measurementId: "G-GW3N09PNDN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;