import React, { Component } from 'react';
import './Game.css';

class PlayAgain extends Component {


    render(props) {
        return(
            <div  id="playDiv" style={{ display: 'none' }}>
                <a href="."><button className="playBtn">play again</button></a>
            </div>
        )
    }
}

export default PlayAgain;