import React, { Component } from 'react';

import './Overlay.css';

class Overlay extends Component {
    constructor(props) {
        super(props);
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }

    handleClick(event) {
        this.props.onToggleMenu(event);
    }

    render() {
        return (
            <div onClick={this.handleClick} className={"Overlay" + (this.props.isShown ? '' : ' hidden')}>
                <i className="icon ion-android-close"></i>
            </div>
        );
    }
}

export default Overlay;