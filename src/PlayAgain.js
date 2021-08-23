import React from 'react';
import styles from './Game.css';

const PlayAgain = () => {
  return (
    <section style={{ padding: '10% 0', display: 'none' }} id="repeatPlay">
      <div className={styles.PlayAgain}>
        <a href=".">
          <button>play again</button>
        </a>
      </div>
    </section>
  );
};

export default PlayAgain;
