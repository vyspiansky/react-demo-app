import React, { Component } from 'react';

import './TabList.css';

class TabList extends Component {
    render() {
        return (
            <div className="TabList">
                <ul>
                    <li className="Tab Tab-active">
                        <a href="#">Tab 1</a>
                    </li>
                    <li className="Tab">
                        <a href="#">Tab 2</a>
                    </li>
                    <li className="Tab">
                        <a href="#">Tab 3</a>
                    </li>
                    <li className="Tab">
                        <a href="#">Tab 4</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default TabList;