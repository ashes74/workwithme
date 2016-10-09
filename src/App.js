import React, { Component } from 'react';
// import logo from './cwwm.png';
import './App.css';
import Home from './Home';
import UserCard from './UserCard';
// import base from './base';
import * as firebase from 'firebase';
import * as config from './firebase.config.js';
firebase.initializeApp(config);


// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     console.log('user', user);
//   console.log('testingggggggg');
//   } else {
//     console.log('testingggggggg!!!!!!!!!!');
//   }
// });
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: [],
      loggedIn: (null !== firebase.auth().currentUser),
      // assuming i will want some type of auth here
      loading: true
    }
  }
  
  componentWillMount() {
        firebase.auth().onAuthStateChanged(firebaseUser => {

            this.setState({
                loggedIn: (null !== firebaseUser)
            })

            if (firebaseUser) {
                console.log("Logged IN", firebaseUser);
            } else {
                console.log('Not logged in');
            }
        });
    }
  
  // getCards(){
  //   console.log('this is a list', this.state.list);
  //   return this.state.list.map(this.renderCard);
  // }
  testUser() {
    console.log('user!!!!!!!', firebase.auth().currentUser);
  }
  renderCard(card, key){
    return <UserCard key={key} card={card}/>
  }
  
  render() {
    let children = this.props.children;

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Work With Me</h2>
        </div>
        <button onClick={this.testUser}>User!!</button>
        <Home/>
        <span className="App-intro">
          {children}
          
        </span>
      </div>
    );
  }
}

export default App;
