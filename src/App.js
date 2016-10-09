import React, { Component } from 'react';
// import logo from './cwwm.png';
import './App.css';

class App extends Component {

  render() {
    let children = this.props.children;

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Work With Me</h2>
        </div>
        <button>Click me!</button>
        <p className="App-intro">
          {children}
        </p>
      </div>
    );
  }
}

export default App;
