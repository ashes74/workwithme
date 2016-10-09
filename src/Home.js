import React, { Component } from 'react';
import { Link } from 'react-router';
import UserCard from './UserCard';
import * as firebase from './firebase.config';

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
    return (
      <div>
        <p>
          Welcome to "Come Work With Me!!"
        </p>

      </div>
    );
  }
}

export default Home;
