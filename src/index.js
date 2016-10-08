import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import './index.css';
// import 'current-input';
import Jobs from './Jobs';
import Home from './Home';
import UserForm from './UserForm';



const routes = (
  <Route path="/" mapMenuTitle="Home" component={App}>
    <IndexRoute component={Home} /> 

    <Route path="jobs" mapMenuTitle="Jobs" component={Jobs}/>
    <Route path="userform" mapMenuTitle="UserForm" component={UserForm}/>
  </Route>

);


render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root')
);
