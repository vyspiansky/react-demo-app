import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Greeting from './Greeting';

import './Menu.css';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: props.items.map((item, index) => (
                <li key={index}>
                    <Link to={item.path}>
                        <i className={"icon " + item.icon}></i>
                        {item.title}
                    </Link>
                </li>
            ))
        };
    }

    render() {
        return (
            <div className={"Menu box-shadow-right" + (this.props.isShown ? '' : ' hidden')}>
                <nav className="Menu-items">
                    <ul>
                        {this.state.listItems}
                    </ul>
                </nav>

                <div className="Menu-profile">
                    <Greeting isLoggedIn={false} />
                </div>
            </div>
        );
    }
}

export default Menu;