import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
// import Spinner from 'react-spinner';

import './App.css';

import Header from './Header';
import Menu from './Menu';
import Switcher from './Switcher';

import Home from './Home';
import NameForm from './NameForm';
import UserListContainer from './UserListContainer';

const menuItems = [
  {
      path: '/',
      exact: true,
      component: Home,
      title: 'Головна'
  },
  {
      path: '/form',
      exact: false,
      component: NameForm,
      title: 'Форма'
  },
  {
      path: '/users',
      exact: false,
      component: UserListContainer,
      title: 'Користувачі'
  }
];

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Header />
            <Menu items={menuItems} />
            <Switcher items={menuItems} />
        </div>
      </Router>
    );
  }
}

export default App;
