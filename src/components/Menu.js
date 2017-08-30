import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Greeting from './Greeting';

import './Menu.css';

class Menu extends Component {
    constructor(props) {
        super(props);

        // This binding is necessary to make `this` work in the callback
        this.handleMenuItemClick = this.handleMenuItemClick.bind(this);

        const that = this;

        this.state = {
            listItems: props.items.map((item, index) => (
                <li key={index} onClick={that.handleMenuItemClick}>
                    <Link to={item.path}>
                        <i className={'icon ' + item.icon}></i>
                        {item.title}
                    </Link>
                </li>
            ))
        };
    }

    handleMenuItemClick(event) {
        this.props.onToggleMenu(event);
    }

    render() {
        return (
            <div className={"Menu" + (this.props.isShown ? '' : ' hidden')}>
                <div>
                    <nav className="Menu-items">
                        <ul>
                            {this.state.listItems}
                        </ul>
                    </nav>

                    <div className="Menu-profile">
                        <Greeting isLoggedIn={false} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;