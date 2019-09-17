import React, { Component } from 'react';
import styles from './Game.css';

class Timer extends Component {
    render(props) {
        return(
            <header
                className={styles.gameHead}
                id="youWin"
                style={{ display: 'none', fontSize: '5.5vh' }}
            >Your Score: {this.props.score}</header>
        )
    }       
}
export default Timer