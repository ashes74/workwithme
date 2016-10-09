import React, { Component } from 'react';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';

class Signup extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.testClick = this.testClick.bind(this);
        this.state = {
          email: '',
          pw: '',
          error: ''
        };
    }

    signout(e) {
    
        firebase.auth().signOut().then(function() {
            console.log('signout');
        }, function(error) {
            console.log(error)
        })
    }
    handleSubmit (e) {
        e.preventDefault();
        var email = this.refs.email.value;
        var pw    = this.refs.pw.value;
        
        console.log('email', email);
        firebase.auth().signInWithEmailAndPassword(email, pw)
        .then(function(result) {
            browserHistory.push('/userform');
        }, function (error) {
            console.log(error);
            // this.setState({error: e.message});
        })
    }
    
    render() {
        return (
            <div>
            <button onClick={this.signout}></button>
            <form className="ui form" onSubmit={this.handleSubmit}>
                <div className="ui field">
                    <label>Email</label>
                    <input type="text" placeholder="Email" ref="email" />
                </div>
                <div className="ui field">
                    <label>Password</label>
                    <input type="password" placeholder="Password" ref="pw"/>
                </div>
                {this.state.error}
                <button className="ui button" type="submit">Submit</button>
            </form>
            </div>
        );
    }
}

export default Signup;