import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyClTe0UTKHQpH6HKyIRBwZHIc66C6ndegI",
    authDomain: "sasha-cds-poc.firebaseapp.com",
    databaseURL: "https://sasha-cds-poc-default-rtdb.firebaseio.com",
    projectId: "sasha-cds-poc",
    storageBucket: "sasha-cds-poc.appspot.com",
    messagingSenderId: "318834472427",
    appId: "1:318834472427:web:af82a7776350443eee95ae",
    measurementId: "G-WC54ZTFM3D"
}

firebase.initializeApp(firebaseConfig)
var storage = firebase.storage()
export default storage