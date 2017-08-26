import React, { Component } from 'react';
import {Helmet} from "react-helmet";

import Clock from './Clock';
import Toggle from './Toggle';
import Greeting from './Greeting';

function Welcome(props) {
    return (
        <h1>Hello, {props.name} ;)</h1>
    );
}

class Home extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Home</title>
                </Helmet>
        
                <Welcome name="stranger" />
                <Clock />
                <Toggle />
                <Greeting isLoggedIn={false} />
                <Greeting isLoggedIn={true} />
            </div>
        );
    }
}

export default Home;