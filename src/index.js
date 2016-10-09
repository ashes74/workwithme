import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import './index.css';
// import 'current-input';
import Jobs from './Jobs';
import Home from './Home';
import UserFormView from './UserFormView';



const routes = (
  <Route path="/" mapMenuTitle="Home" component={App}>
    <Route path="jobs" mapMenuTitle="Jobs" component={Jobs}/>
    <Route path="userform" mapMenuTitle="UserFormView" component={UserFormView}/>
  </Route>

);


render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root')
);
