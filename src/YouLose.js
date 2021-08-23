import React, { Component } from 'react';
import styles from './Game.css';

const YouLose = () => {
  return (
    <header
      className={styles.gameHead}
      id="youLose"
      style={{ display: 'none', fontSize: '5.5vh' }}
    >
      Time is out, sucka.
    </header>
  );
};
export default YouLose;
