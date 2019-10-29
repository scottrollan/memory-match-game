import React, { Component } from 'react';
import LevelButton from './LevelButton';
import styles from './Game.css';

class PickLevel extends Component {
    state={
        levels: [
            { level: 1, name: 'easy peasy', id: 'easy', time: 80 },
            { level: 2, name: '...meh', id: 'medium', time: 60 },
            { level: 3, name: 'yikes!', id: 'hard', time: 48 }
        ]

    };

    render(props) {
        return(
            <div 
                id="pickLevel"
                style={{
                    paddingTop: '12vh'
                }} >
                <h1 style={{ color: 'whitesmoke' }}>pick a level</h1>
                {this.state.levels.map((l, index) => (
                    <LevelButton 
                        key={index}
                        level={l.level}
                        id={l.id} 
                        time={l.time}
                        className={styles.playBtn} 
                        pickLevel={(event) => this.props.pickLevel(event)}
                        name={l.name}
                    />
                ))};
            </div>
        )
    }       
}
export default PickLevel;