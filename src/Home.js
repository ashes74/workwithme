import React, { Component } from 'react';
import { Link } from 'react-router';
import UserCard from './UserCard';
import * as firebase from 'firebase';

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log('user', user);
   console.log('testingggggggg');
  } else {
    console.log('testingggggggg!!!!!!!!!!');
  }
});

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: [],
      loggedIn:  false,
      // assuming i will want some type of auth here
      loading: true
    }
  }

  render() {
    let children = this.props.children;
    var logInOrOut;
    var logInStatus;
    console.log('loggedIn: ', this.state.loggedIn);
    if (this.state.loggedIn) {
      logInStatus = 'WOO';
      logInOrOut = 
        <div>
          <Link to="/logout">
            Logout
          </Link>
        </div>
          ;
      
    } else {
      logInStatus = 'FUCK';
      logInOrOut = <div>
          
          <Link to="/login">
            Login 
          </Link>
          <br/>
          <Link to="/signup">
            Sign up
          </Link><br/>
          <Link to="/jobs">
           See Jobs
          </Link><br/>
          <Link to="/userform">
           Become a User
          </Link>
          
        </div>;
    }
    return (
      <div>
        {logInStatus}
        <p>
          Welcome to "Come Work With Me!!"
        </p>
        {logInOrOut}
        {this.state.loggedIn}
      </div>
    );
  }
}

export default Home;
