import React, { Component } from 'react';

import './CheckboxList.css';

class CheckboxList extends Component {
    render() {
        return (
            <div className="CheckboxList">
                <ul>
                    <li>
                        <input id="checkbox-1" type="checkbox" />
                        <label htmlFor="checkbox-1">
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        </label>
                    </li>
                    <li>
                        <input id="checkbox-2" type="checkbox" />
                        <label htmlFor="checkbox-2">checkbox-2</label>
                    </li>
                    <li>
                        <input id="checkbox-3" type="checkbox" />
                        <label htmlFor="checkbox-3">checkbox-3</label>
                    </li>
                    <li>
                        <input id="checkbox-4" type="checkbox" />
                        <label htmlFor="checkbox-4">
                            Vestibulum tortor quam, feugiat vitae, ultricies eget,
                            tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
                        </label>
                    </li>
                </ul>
            </div>
        );
    }
}

export default CheckboxList;