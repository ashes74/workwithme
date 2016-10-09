import React, { Component } from 'react';
// import logo from './cwwm.png';
import './App.css';
var firebase = require('firebase');
firebase.initializeApp({
  databaseURL: "https://databaseName.firebaseio.com",
  serviceAccount: "path/to/serviceAccountCredentials.json"
});
var db = firebase.database();

class App extends Component {
  render() {
      let children = this.props.children;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Work With Me</h2>
        </div>
        <button onClick={}>Click me!</button>
        <p className="App-intro">
          {children}
        </p>
      </div>
    );
  }
}

export default App;
