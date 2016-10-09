import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.element,
};

function UserForm({ children }) {
  return (
    <form className="ui form">
      <div className="field">
        <div className="ui checkbox">
          <input type="checkbox" tabIndex="0" ref="isSeeker"/>
          <label>I am seeking job opportunities</label>
        </div>
      </div>
      <div className="fields">
        <div className="field">
          <label>First name</label>
          <input type="text" placeholder="Grace" ref="firstName"/>
        </div>
        <div className="field">
          <label>Last name</label>
          <input type="text" placeholder="Hopper" ref="lastName"/>
        </div>
      </div>
      <div className="field">
        <label>Company</label>
        <input type="text" name="company" ref="company"/>
      </div>
      <div className="field">
        <label>Role</label>
        <input type="text" name="role" ref="role"/>
      </div>
      <div className="field">
        <label>Location</label>
        <input type="text" name="location" ref="location"/>
      </div>
      <div className="field">
        <label>Tell us a little bit about yourself!</label>
        <textarea ref="additionalInfo"></textarea>
      </div>
      <button className="ui button" type="submit">Submit</button>
    </form>
  );
}

UserForm.propTypes = propTypes;

export default UserForm;
