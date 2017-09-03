import React, { Component } from 'react';

import './RadioList.css';

class RadioList extends Component {
    render() {
        return (
            <div className="RadioList">
                <ul>
                    <li>
                        <input id="radio-1" type="radio" name="radio1" />
                        <label htmlFor="radio-1">radio-1</label>
                    </li>
                    <li>
                        <input id="radio-2" type="radio" name="radio1" />
                        <label htmlFor="radio-2">radio-2</label>
                    </li>
                    <li>
                        <input id="radio-3" type="radio" name="radio1" />
                        <label htmlFor="radio-3">radio-3</label>
                    </li>
                    <li>
                        <input id="radio-4" type="radio" name="radio1" />
                        <label htmlFor="radio-4">radio-4</label>
                    </li>
                </ul>
            </div>
        );
    }
}

export default RadioList;