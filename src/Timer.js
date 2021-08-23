import React, { Component } from 'react';
import styles from './Game.css';

const Timer = ({ time }) => {
  const rn = Number(time).toFixed(1);
  return (
    <div
      className={styles.gameHead}
      id="timer"
      style={{
        display: 'none',
        fontSize: '8vh',
        textAlign: 'left',
        width: '100%',
        padding: '0 33%',
      }}
    >
      {rn}
    </div>
  );
};
export default Timer;
