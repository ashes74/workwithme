import React, { Component } from 'react';

class UserCard extends Component {
  render() {
      let {children, card} = this.props;
      let {Name, Location, year, description, image} = card;
    return (
      <div className="ui card">
        <div className="image">
          <img src={image}/>
        </div>
      <div className="content">
        <a className="header">{Name}</a>
        <div className="meta">
          <span className="date">@ current role since {year}</span>
        </div>
        <div className="description">
          {description}
        </div>
        </div>
        <div className="extra content">
          <span>
            {Location}
          </span>
        </div>
      </div>
    );
  }
}

export default UserCard;
