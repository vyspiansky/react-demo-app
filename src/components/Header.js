import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
    
        // This binding is necessary to make `this` work in the callback
        this.handleMenuIconClick = this.handleMenuIconClick.bind(this);
      }

    handleMenuIconClick(event) {
        event.preventDefault();
        this.props.onToggleMenu(event);
    }

    render() {
        return (
            <div className="Header">
                <div className="container">
                    <header>
                        <div className="Header-left">
                            <ul>
                                <li>
                                    <a href="#" onClick={this.handleMenuIconClick}>
                                        <i className="icon ion-android-menu"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="Header-center">
                            <h2>Math.org.ua</h2>
                        </div>

                        <div className="Header-right">
                            <ul>
                                <li><a href="#"><i className="icon ion-android-search"></i></a></li>
                            </ul>
                        </div>
                    </header>
                </div>
            </div>
        );
    }
}

export default Header;