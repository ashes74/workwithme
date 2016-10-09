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

  componentDidMount(){
    var peoples = firebase.database().ref('People/');
    peoples.on('value', function(snapshot) {
      this.state.list = Array.from(snapshot.val());
      this.setState({list: this.state.list});
    });
  }

  renderCard(card, key){
    return <UserCard key={key} card={card}/>
  }

  getCards(){
    return this.state.list.map(this.renderCard);
  }


  render() {
    let children = this.props.children;

    return (
      <div>
        <div className="ui cards">
          {this.getCards()}
        </div>
      </div>
    );
  }
}

export default Home;
