import React, { Component } from 'react';
import styles from './Game.css';

class Timer extends Component {
    render(props) {
        return(
            <header 
                className={styles.gameHead}
                id='timer'
                style={{display: 'none', fontSize: '8vh'}}
            >{this.props.time}</header>
        )
    }       
}
export default Timer