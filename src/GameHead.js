import React from 'react';
import styles from './Game.css';

const GameHead = () => {

    return(
        <header className={styles.gameHead} id='gameHead'>
            <p style={{ fontSize: '30px', margin: '0' }}><u>Memory Match</u></p>
            <p style={{ fontSize: '24px', magin: '0' }}>Click the cards to find their matching counterpart!</p>
        </header>
    )
    
}

export default GameHead;