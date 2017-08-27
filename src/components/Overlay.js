import React, { Component } from 'react';

import './Overlay.css';

class Overlay extends Component {
    render() {
        return (
            <div className={"Overlay" + (this.props.isShown ? '' : ' hidden')}></div>
        );
    }
}

export default Overlay;