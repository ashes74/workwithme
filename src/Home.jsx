import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  children: PropTypes.element,
};

function Home({ children }) {
  return (
    <div>
      <p>
        Welcome to "Come Work With Me!!"
      </p>
      {children ||
        <div><Link to="/jobs">
         See Jobs
        </Link></div>}
    </div>
  );
}

Home.propTypes = propTypes;

export default Home;
