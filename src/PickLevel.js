import React, { Component } from 'react';
import './Game.css';

class PickLevel extends Component {
    state={
        easyVal: 80,
        mediumVal: 60,
        difficultVal: 48
    };

    render(props) {
        return(
            <div 
                id="pickLevel"
                style={{
                    paddingTop: '12vh'
                }} >
                <h1 style={{ color: 'whitesmoke' }}>pick a level</h1>
                <button 
                    value={this.state.easyVal}
                    id="easy" 
                    className="playBtn" 
                    onClick={this.props.level}
                >easy peasy</button>
                <button
                    value={this.state.mediumVal} 
                    id="medium" 
                    className="playBtn" 
                    onClick={this.props.level}
                >...meh</button>
                <button 
                    value={this.state.difficultVal}
                    id="difficult" 
                    className="playBtn" 
                    onClick={this.props.level}
                >yikes!</button>
            </div>
        )
    }       
}
export default PickLevel;