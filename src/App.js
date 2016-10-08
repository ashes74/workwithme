import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
      let children = this.props.children;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Work With Me</h2>
        </div>
        <p className="App-intro">
          {children}
        </p>
      </div>
    );
  }
}

export default App;
