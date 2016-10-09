import firebase from 'firebase';

var config = {   apiKey: "AIzaSyBD83Lu6kwaquSS4y_RayZwHu8uhhi53YE",
    authDomain: "work-with-me-444fb.firebaseapp.com",
    databaseURL: "https://work-with-me-444fb.firebaseio.com",
    // storageBucket: "work-with-me-444fb.appspot.com",
    // messagingSenderId: "342531660792"
}

var initialized = firebase.initializeApp(config, "Second");

module.exports = initialized;