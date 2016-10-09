import React, { Component } from 'react';
import { Link } from 'react-router';
import UserCard from './UserCard';
import * as firebase from './firebase.config';
import base from './base';

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
    this.ref = base.syncState('People', {
      context: this,
      state: 'list',
      asArray: true,
      then(){
        this.setState({loading: false})
      }
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
