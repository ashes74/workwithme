import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import UserCard from './UserCard';
import Banner from './Banner'
import * as firebase from './firebase.config.js';

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

  //handle login
  login(){
  console.log("Attempting to login")

  }
  //handle signin
  signin(){

  }

  //handle logout
  logout(){

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

  renderCard(card, key){
    return <UserCard key={key} card={card}/>
  }

  render() {
    let children = this.props.children;
    const buttons = [{
      title: "Sign Up",
      onClick: this.signin.bind(this),
      link: "/userform",
      visible: !this.state.loggedIn
    },
    {
      title: "Login",
      onClick: this.login.bind(this),
      link: "/login",
      visible: !this.state.loggedIn
    },
    {
      title: "Logout",
      onClick: this.logout.bind(this),
      link: "/logout",
      visible: this.state.loggedIn
    }
    ]

    return (
      <div className="App">
        <div className="App-header">
          <Banner buttons = {buttons}/>
        </div>
        <span className="App-intro">
          {children}

        </span>
      </div>
    );
  }
}

export default App;