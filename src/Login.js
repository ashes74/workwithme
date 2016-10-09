import React, { Component } from 'react';
import { Link } from 'react-router';
// import base from './base';
import * as firebase from 'firebase';

class Login extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          
        };
    }
    
    handleSubmit (e){
        e.preventDefault();
        var email = this.refs.email.value;
        var pw    = this.refs.pw.value;
        var self  = this;

        firebase.auth().signInWithEmailAndPassword(email, pw).then(function(result) {
            var location = self.props.location
            if (location.state && location.state.nextPathname) {
                self.context.router.replace(location.state.nextPathname)
            } else {
                self.context.router.replace('/dashboard')
            }
            // User signed in!
            console.log('User signed in!');
            // var uid = result.user.uid;
        }).catch(function(error) {
            this.setState({error: error});
        })
    }
    
    render() {
        // form onSubmit={} 
        return (
            <form className="ui form">
                <div className="ui field">
                    <label>Email</label>
                    <input type="text" placeholder="Email" ref="email" />
                </div>
                <div className="ui field">
                    <label>Password</label>
                    <input type="password" placeholder="Password" ref="pw"/>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        );
    }
}

export default Login;