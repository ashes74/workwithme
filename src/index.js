import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import './index.css';
import UserForm from './UserForm';
import HomeView from './HomeView';
import Login from './Login';
import Signup from './Signup';


const routes = (
  <Route path="/" mapMenuTitle="Home" component={App}>
    <IndexRoute component={HomeView}/>
    <Route path="userform" mapMenuTitle="UserForm" component={UserForm}/>
    <Route path="login" mapMenuTitle="Login" component={Login}/>
    <Route path="signup" mapMenuTitle="Signup" component={Signup}/>
  </Route>

);


render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root')
);
