import React, { Component } from 'react';
import {Helmet} from "react-helmet";

import ProgressBar from './ProgressBar';

import TabList from './TabList';
import CheckboxList from './CheckboxList';
import RadioList from './RadioList';
import ButtonList from './ButtonList';

import Message from './Message';

class Home extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Home</title>
                </Helmet>
        
                <h1>Home</h1>

                <ProgressBar current="3" total="8" />
                <ProgressBar current="4" total="5" />
                <ProgressBar current="0" total="10" />

                <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas.</p>

                <p>Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
                Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.</p>

                <p>Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget
                tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis
                pulvinar facilisis. Ut felis.</p>

                <p>Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.</p>
                <CheckboxList />

                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                <RadioList />

                <TabList />
                <ButtonList />

                <Message text="Vestibulum tortor quam, feugiat vitae, ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." />
                <Message type="fail" text="Quisque sit amet est et sapien ullamcorper pharetra." />
                <Message type="info" text="Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi." />
            </div>
        );
    }
}

export default Home;