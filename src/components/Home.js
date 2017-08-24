import React, { Component } from 'react';
import {Helmet} from "react-helmet";

import Clock from './Clock';
import Toggle from './Toggle';
import Greeting from './Greeting';
import NumberList from './NumberList';

function Welcome(props) {
    return (
        <h1>Hello, {props.name} ;)</h1>
    );
}

class Home extends Component {
    render() {
        const numbers = [1, 2, 3, 4, 5];
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
                <NumberList numbers={numbers} />
            </div>
        );
    }
}

export default Home;