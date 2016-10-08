import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  children: PropTypes.element,
};

function User({ children }) {
  return (
    <form className="ui form">
      <div className="field">
        <div className="ui checkbox">
          <input type="checkbox" tabindex="0"/>
          <label>I am seeking job opportunities</label>
        </div>
      </div>
      <div className="fields">
        <div className="field">
          <label>First name</label>
          <input type="text" placeholder="First Name"/>
        </div>
        <div className="field">
          <label>Last name</label>
          <input type="text" placeholder="Last Name"/>
        </div>
      </div>
      <div className="field">
        <label>Company</label>
        <input type="text" name="company"/>
      </div>
      <div className="field">
        <label>Role</label>
        <input type="text" name="role"/>
      </div>
      <div className="field">
        <label>Location</label>
        <input type="text" name="location"/>
      </div>
      <div class="field">
        <label>Tell us a little bit about yourself!</label>
        <textarea></textarea>
      </div>
      <button className="ui button" type="submit">Submit</button>
    </form>
  );
}

User.propTypes = propTypes;

export default User;
