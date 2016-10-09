import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Home from './Home';

const propTypes = {
  children: PropTypes.element,
};

function HomeView({ children }) {
  return (
    <div>
      <Home/>
    </div>
  );
}

HomeView.propTypes = propTypes;

export default HomeView;
