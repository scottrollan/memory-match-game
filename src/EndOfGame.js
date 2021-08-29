import React, { useState, useEffect } from 'react';
import TopTen from './TopTen';
import styles from './EndOfGame.css';

const EndOfGame = ({ score, stats }) => {
  const [winnersList, setWinnersList] = useState([]);
  const [qualifyingScore, setQualifyingScore] = useState(0);
  const [myScore, setMyScore] = useState(0);

  useEffect(() => {
    const winners = stats.winners ?? [];
    setWinnersList([...winners]);
    const qualifier = stats.qualifier ?? 0;
    setQualifyingScore(Number(qualifier));
    setMyScore(Number(score));
  }, [score, stats]);

  return (
    <div
      className={styles.gameHead}
      id="endOfGame"
      style={{ display: 'none', fontSize: '5.5vh' }}
    >
      Your Score: {score}
      <TopTen
        winnersList={winnersList}
        myScore={myScore}
        qualifyingScore={qualifyingScore}
      />
    </div>
  );
};
export default EndOfGame;
