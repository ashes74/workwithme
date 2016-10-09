import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import UserCard from './UserCard';

const propTypes = {
  children: PropTypes.element,
};

function Home({ children }) {
  let renderCard = function(card, key){
    return <UserCard key={key} card={card}/>
  };
  let getCards = function(){
    //api call would go here!!!!!
    return [{
      name: 'Missy Coolperson',
      description: 'Missy is a cool person!',
      year: 2016,
      location: 'Salt Lake City, Utah',
      image: 'http://semantic-ui.com/images/avatar2/large/kristy.png'
    }].map(renderCard);
  };


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
         {getCards()}
    </div>
  );
}

Home.propTypes = propTypes;

export default Home;
