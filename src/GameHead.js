import React from 'react';
import './Game.css';

const GameHead = () => {

    return(
        <header id="gameHead">
            <p style={{ fontSize: '5vw', paddingTop: '2vh' }}><u>Memory Match</u></p>
            <p style={{ fontSize: '3vw' }}>Click the cards to find their matching counterpart!</p>
        </header>
    )
    
}

export default GameHead;