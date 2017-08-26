import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './Menu.css';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: props.items.map((item, index) => (
                <li key={index}><Link to={item.path}>{item.title}</Link></li>
            ))
        };
    }

    render() {
        return (
            <nav className="Menu hiden2">
                <ul>
                    {this.state.listItems}
                </ul>
            </nav>
        );
    }
}

export default Menu;