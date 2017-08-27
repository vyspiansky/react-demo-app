import React, { Component } from 'react';

import './Greeting.css';

class Greeting extends Component {
    render() {
        const isLoggedIn = this.props.isLoggedIn;

        let message = null;
        if (isLoggedIn) {
            message = <div className="Greeting-success">Welcome back!</div>;
        } else {
            message = <div className="Greeting-miss">Please sign up</div>;
        }

        return (
            <div className="Greeting">
                {message}
            </div>
        );

    }
}

export default Greeting;