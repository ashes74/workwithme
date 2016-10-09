import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import UserForm from './UserForm'

const propTypes = {
  children: PropTypes.element,
};

function UserFormView({ children }) {
  return (
    <div className="content">
      <UserForm/>
    </div>
  );
}

UserFormView.propTypes = propTypes;

export default UserFormView;
