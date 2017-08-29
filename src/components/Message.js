import React, { Component } from 'react';

import './Message.css';

class Message extends Component {
    render() {
        let className;
        let iconClassName;

        switch (this.props.type) {
            case 'fail':
                className = 'message-fail';
                iconClassName = 'ion-android-warning';
                break;
            case 'info':
                className = 'message-info';
                iconClassName = 'ion-android-bulb';
                break;
            default:
                className = 'message-success';
                iconClassName = 'ion-android-done';
        }

        return (
            <div className={'Message ' + className}>
                <i className={'icon ' + iconClassName}></i>
                {this.props.text}
            </div>
        );
    }
}

export default Message;