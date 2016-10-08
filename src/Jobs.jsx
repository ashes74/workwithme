import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  children: PropTypes.element,
};

function Jobs({ children }) {
  return (
    <div className="ui two cards">
      <div className="card">
      <div className="content">
       <img className="right floated mini ui image" src="/images/avatar/large/elliot.jpg"/>
      <div className="header">
        LinkedIn
      </div>
      <div className="meta">
        Software Engineer Role
      </div>
      <p>
        This is an example page. Refresh the page or copy/paste the url to
        test out the redirect functionality (this same page should load
        after the redirect).


        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quaerat sed doloribus fugit commodi non debitis magnam fugiat ea vitae, facere sit veritatis saepe possimus, assumenda, ullam cumque adipisci blanditiis!
      </p>
      {children ||
        <div><Link to="/example/two-deep?field1=foo&field2=bar#boom!">
          Example two deep with query and hash
        </Link></div>}
        </div>
      </div>
    </div>
  );
}

Jobs.propTypes = propTypes;

export default Jobs;
