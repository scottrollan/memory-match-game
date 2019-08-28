import React, { Component } from 'react';
import './Game.css';

class GameHead extends Component {


    render(props) {
        return(
            <header id="gameHead">
                <h1><u>Memory Match</u></h1>
                <p>Click the cards to find their matching counterpart!</p>
          </header>
        )
    }
}

export default GameHead;