import React, { Component } from 'react';

class UserCard extends Component {
  render() {
      let {children, card} = this.props;
      let {name, location, year, description, image} = card;
    return (
      <div className="ui card">
        <div className="image">
          <img src={image}/>
        </div>
      <div className="content">
        <a className="header">{name}</a>
        <div className="meta">
          <span className="date">@ current role since {year}</span>
        </div>
        <div className="description">
          {description}
        </div>
        </div>
        <div className="extra content">
          <span>
            {location}
          </span>
        </div>
      </div>
    );
  }
}

export default UserCard;
