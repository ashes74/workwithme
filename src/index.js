import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import './index.css';
// import 'current-input';
import Jobs from './Jobs';
import UserForm from './UserForm';
import Login from './Login';
import Signup from './Signup';


const routes = (
  <Route path="/" mapMenuTitle="Home" component={App}>
    <Route path="jobs" mapMenuTitle="Jobs" component={Jobs}/>
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
