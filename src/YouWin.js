import React, { useState, useEffect } from 'react';
import { Client } from './constants/index';
import styles from './YouWin.css';

const YouWin = ({ score, level, gameStarted }) => {
  const [winnersList, setWinnersList] = useState([]);
  const [myLevel, setMyLevel] = useState(null);

  useEffect(() => {
    let w = [];
    const query = '*[_type == "winner"]';
    Client.fetch(query).then((winners) => {
      winners.forEach((winner) => {
        w = [...w, { ...winner }];
      });
      setWinnersList([...w]);
      console.log(w);
    });
  }, []);

  return (
    <div
      className={styles.gameHead}
      id="youWin"
      style={{ display: 'none', fontSize: '5.5vh' }}
    >
      Your Score: {score}
      <div className={styles.winnersList} id="winnersList">
        {winnersList.map((w) => {
          const k = w.initials.concat(w.score);
          return (
            <div
              key={k}
              style={{ display: w.level === myLevel ? 'initial' : 'none' }}
            >
              <span>{w.initials}</span>
              {/* <span>{w._createdAt}</span> */}
              <span>{w.score}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default YouWin;
