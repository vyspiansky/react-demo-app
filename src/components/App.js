import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch//,
  //Redirect
} from 'react-router-dom';

// import Spinner from 'react-spinner';

import logo from '../logo.svg';
import './App.css';

import Home from './Home';
import NameForm from './NameForm';
import UserListContainer from './UserListContainer';
import NoMatch from './NoMatch';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
              <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>React Demo App</h2>

                <ul className="App-menu">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/form">Form</Link></li>
                  <li><Link to="/users">Users</Link></li>
                  <li><Link to="/admin">Admin</Link></li>
                </ul>
              </div>

              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/form" component={NameForm} />
                <Route path="/users" component={UserListContainer} />
                <Route component={NoMatch} />
              </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
