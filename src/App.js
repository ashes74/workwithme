import React, { Component } from 'react';
// import logo from './cwwm.png';
import './App.css';
import Home from './Home';
import UserCard from './UserCard';
import Banner from './Banner'
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
    const buttons = [{
      title: "Sign Up",
      onClick: this.signin.bind(this),
      link: "/signup",
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
  
        <Banner buttons = {buttons}/>
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


// constructor(props, context) {
//         super(props, context);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         // this.testClick = this.testClick.bind(this);
//         this.state = {
//           email: '',
//           pw: '',
//           error: ''
//         };
//     }

//     signout(e) {
    
//         firebase.auth().signOut().then(function() {
//             console.log('signout');
//         }, function(error) {
//             console.log(error)
//         })
//     }
    // handleSubmit (e) {
    //     e.preventDefault();
    //     var email = this.refs.email.value;
    //     var pw    = this.refs.pw.value;
        
    //     console.log('email', email);
    //     firebase.auth().signInWithEmailAndPassword(email, pw)
    //     .then(function(result) {
    //         this.setState({loggedIn: true});
    //         browserHistory.push('/userform');
    //     }, function (error) {
    //         console.log(error);
    //         // this.setState({error: e.message});
    //     })
    // }