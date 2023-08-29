import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAcZIJlp5n3_G4U8DrlPAz8--XgyGuI6Mk",
    authDomain: "sasha-prod-db.firebaseapp.com",
    projectId: "sasha-prod-db",
    storageBucket: "sasha-prod-db.appspot.com",
    messagingSenderId: "436386647052",
    appId: "1:436386647052:web:2f167be0453a6dabadb229",
    measurementId: "G-LCYVHDE4YN"
};


firebase.initializeApp(firebaseConfig)

export var auth = firebase.auth()
export var storage = firebase.storage()
export var realtimeDb = firebase.database()