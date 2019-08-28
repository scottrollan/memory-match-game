import React, { Component } from 'react';
import './Game.css';

class GameHead extends Component {


    render(props) {
        return(
            <header id="gameHead">
                <p style={{ fontSize: '3vh' }}><u>Memory Match</u></p>
                <p style={{ fontSize: '1.5vh' }}>Click the cards to find their matching counterpart!</p>
          </header>
        )
    }
}

export default GameHead;