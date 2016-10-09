import React, { Component } from 'react';

class UserCard extends Component {
  render() {
      let {children, card} = this.props;
      let {Name, Location, Since, description, Image} = card;

    return (
      <div className="card">
        <div className="image">
          <img src={Image}/>
        </div>
      <div className="content">
        <a className="header">{Name}</a>
        <div className="meta">
          <span className="date">@ current role since {Since}</span>
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
