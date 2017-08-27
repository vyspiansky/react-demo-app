import React, { Component } from 'react';

import './ButtonList.css';

import Button from './Button';

class ButtonList extends Component {

    render() {
        return (
            <div className="ButtonList">
                <ul>
                    <li><Button type="link" text="Гаразд" /></li>
                    <li><Button text="Скасувати" secondary="true" /></li>
                </ul>
            </div>
        );
    }
}

export default ButtonList;