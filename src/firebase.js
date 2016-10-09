var firebase = require('firebase');

var database = function() {
  var config = {
    apiKey: "49e5b5002f26a2657ce0c3fc288862ddc6c81f3f",
    // authDomain: "projectId.firebaseapp.com",
    databaseURL: 'https://work-with-me-444fb.firebaseio.com/',
    // storageBucket: "bucket.appspot.com"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  function writeUserData(userId, location) {
    console.log('writing data');
    firebase.database().ref('People/' + userId).set({
      Location: location,
      Name: userId
    });
  }
}

module.exports = database;