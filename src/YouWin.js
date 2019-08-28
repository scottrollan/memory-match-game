import React, { Component } from 'react';
import './Game.css';

class Timer extends Component {
    render(props) {
        return(
            <header
                id="youWin"
                style={{ display: 'none' }}
            >Your Score: {this.props.score}</header>
        )
    }       
}
export default Timer