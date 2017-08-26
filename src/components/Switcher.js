import React, { Component } from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';

import NoMatch from './NoMatch';

class Switcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: props.items.map((item, index) => (
                <Route key={index} exact={item.path ? true : false} path={item.path} component={item.component} />
            ))
        };
    }

    render() {
        return (
            <div className="Main">
                <div className="container">
                    <Switch>
                        {this.state.listItems}
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Switcher;