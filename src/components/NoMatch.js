import React, { Component } from 'react';
import {Helmet} from "react-helmet";

class NoMatch extends Component {
    render(location) {
        return (
            <div>
                <Helmet>
                    <title>Page not found :(</title>
                </Helmet>

                <h1>Page not found :(</h1>
                <h3>No match for <code>{this.props.location.pathname}</code></h3>
            </div>
        )
    }
}

export default NoMatch;