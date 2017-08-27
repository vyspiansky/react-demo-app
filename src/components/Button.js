import React, { Component } from 'react';

import './Button.css';

class Button extends Component {
    render() {
        const buttonClassName = "Button" + (this.props.secondary ? ' Button-secondary' : '');
        let control;

        switch (this.props.type) {
            case 'link':
                control = <a className={buttonClassName} role="button">{this.props.text}</a>
                break;
            case 'text':
                control = <span className={buttonClassName} role="button">{this.props.text}</span>
                break;
            default:
                control = <button className={buttonClassName} type="button">{this.props.text}</button>
        }

        return control;
    }
}

export default Button;