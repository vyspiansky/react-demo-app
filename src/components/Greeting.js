import React, { Component } from 'react';

class Greeting extends Component {
    render() {
        const isLoggedIn = this.props.isLoggedIn;
        if (isLoggedIn) {
          return <p>Welcome back!</p>;
        }
        return <p>Please sign up.</p>;
    }
}

export default Greeting;