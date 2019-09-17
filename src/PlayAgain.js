import React, { Component } from 'react';
import styles from './Game.css';

class PlayAgain extends Component {


    render(props) {
        return(
            <div  className={styles.playAgain} id='playAgain' style={{ display: 'none' }}>
                <a href="."><button className={styles.playBtn}>play again</button></a>
            </div>
        )
    }
}

export default PlayAgain;