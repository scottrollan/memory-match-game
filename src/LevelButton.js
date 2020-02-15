import React from 'react';
// import styles from './Game.css';

const LevelButton = props => {
    return(
        <button 
        key={props.index}
        data-level={props.level}
        id={props.id} 
        data-time={props.time}
        // className={styles.levelBtn} 
        onClick={(event) => props.pickLevel(event)}
    >{props.name}</button>
    );
};

export default LevelButton;
