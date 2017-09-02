import React, { Component } from 'react';

import './ProgressBar.css';

class ProgressBar extends Component {

    render() {
        const total = this.props.total;
        const current = this.props.current <= total ? this.props.current: 0;

        let cells = [];

        for (let i=1; i <= total; i++) {
            cells.push(
                <td key={i} className={current >= i ? 'passed' : ''} width={100/total + '%'}>{i}</td>
            );
        }

        return (
            <div className="ProgressBar">
                <table>
                    <tbody><tr>{cells}</tr></tbody>
                </table>
            </div>
        );
    }
}

export default ProgressBar;