import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
// import Spinner from 'react-spinner';

import './App.css';

import Header from './Header';
import Menu from './Menu';
import Main from './Main';
import Overlay from './Overlay';

import Home from './Home';
import NameForm from './NameForm';
import UserListContainer from './UserListContainer';

const menuItems = [
  {
      path: '/',
      exact: true,
      component: Home,
      title: 'Головна',
      icon: 'ion-android-home'
  },
  {
      path: '/form',
      exact: false,
      component: NameForm,
      title: 'Форма',
      icon: 'ion-android-list'
  },
  {
      path: '/users',
      exact: false,
      component: UserListContainer,
      title: 'Користувачі',
      icon: 'ion-android-people'
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuShown: false
    };

    // This binding is necessary to make `this` work in the callback
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(event) {
    this.setState(prevState => ({
        isMenuShown: !prevState.isMenuShown
    }));
  }

  render() {
    if (this.state.isMenuShown) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return (
      <Router>
        <div className="App">
            <Header onToggleMenu={this.toggleMenu} />
            <Menu isShown={this.state.isMenuShown} onToggleMenu={this.toggleMenu} items={menuItems} />
            <Main items={menuItems} />
            <Overlay isShown={this.state.isMenuShown} onToggleMenu={this.toggleMenu} />
        </div>
      </Router>
    );
  }
}

export default App;
