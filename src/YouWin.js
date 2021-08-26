import React, { useState, useEffect } from 'react';
import TopTen from './TopTen';
import PlayAgain from './PlayAgain';
import { fetchWinners } from './constants/index';
import styles from './YouWin.css';

const YouWin = ({ score }) => {
  const [winnersList, setWinnersList] = useState([]);
  const [topTenScore, setTopTenScore] = useState(0);

  useEffect(() => {
    let w = [];
    const query = '*[_type == "winner"]| order(score desc)';
    const fetchData = async () => {
      const theseWinners = await fetchWinners(query);
      theseWinners.forEach((winner, i) => {
        if (i < 10) {
          w = [...w, { ...winner }];
          if (i === 9) {
            setTopTenScore(winner.score);
          }
        }
      });

      setWinnersList([...w]);
      console.log(w);
    };
    fetchData();
  }, []);

  return (
    <div
      className={styles.gameHead}
      id="youWin"
      style={{ display: 'none', fontSize: '5.5vh' }}
    >
      Your Score: {score}
      <TopTen winnersList={winnersList} yourScore={score} />
      <PlayAgain />
    </div>
  );
};
export default YouWin;
