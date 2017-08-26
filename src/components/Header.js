import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="container">
                    <header>
                        <div className="Header-left">
                            <ul>
                                <li><a href="#"><i className="icon ion-android-menu"></i></a></li>
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