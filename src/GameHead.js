import React from 'react';
import './Game.css';

const GameHead = () => {

    return(
        <header id="gameHead">
            <p style={{ fontSize: '3vw' }}><u>Memory Match</u></p>
            <p style={{ fontSize: '2vw' }}>Click the cards to find their matching counterpart!</p>
        </header>
    )
    
}

export default GameHead;