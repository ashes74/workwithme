import React, { Component } from 'react';
import { Link } from 'react-router';
import UserCard from './UserCard';
import base from './base';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: [],
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
    })
  }

  renderCard(card, key){
    return <UserCard key={key} card={card}/>
  }

  getCards(){
    console.log('this is a list', this.state.list);
    return this.state.list.map(this.renderCard);
  }

  render() {
    let children = this.props.children;

    return (
      <div>
        <p>
          Welcome to "Come Work With Me!!"
        </p>
        {children ||
          <div><Link to="/jobs">
           See Jobs
          </Link></div>}
        {children ||
          <div><Link to="/userform">
           Become a User
          </Link></div>}
          <div className="ui cards">
            {this.getCards()}
          </div>
      </div>
    );
  }
}

export default Home;
