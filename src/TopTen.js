import React, { useState, useEffect } from 'react';
import PlayAgain from './PlayAgain';
import { sendNewWinner } from './constants/index.js';
import { createRandomString } from './constants/CreateRandomString';
import { Form, Button } from 'react-bootstrap';
import $ from 'jquery';
import styles from './TopTen.css';

export default function TopTen({ winnersList, myScore, qualifyingScore }) {
  const [topTen, setTopTen] = useState([]);
  const [initials, setInitials] = useState({
    first: '',
    second: '',
    third: '',
  });
  const [iMadeTopTen, setIMadeTopTen] = useState(false);

  const submitScore = async (event) => {
    event.preventDefault();
    const inputInitials = initials.first + initials.second + initials.third;
    const winnerInitials = inputInitials.trim();
    const winnerScore = Number(myScore).toFixed(3);
    const winner = {
      _type: 'winner',
      initials: winnerInitials,
      score: Number(winnerScore),
    };
    const res = await sendNewWinner(winner);
    console.log(res);
    $('#repeatPlay').show();
    $('#submitScoreBtn').hide();
    $('.initial').prop('disabled', true);
  };

  useEffect(() => {
    let newTopTen = [];
    if (myScore > qualifyingScore) {
      setIMadeTopTen(true);
      $('#repeatPlay').hide();
      winnersList.forEach((w, i) => {
        if (i < 9) {
          newTopTen = [...newTopTen, w]; //remove the lowest scoring winner ([9])
        }
      });
      newTopTen = [
        ...newTopTen,
        {
          type: 'winner',
          score: myScore,
          initials: '',
        },
      ];
      newTopTen.sort((a, b) => {
        return b.score - a.score;
      });
    } else {
      newTopTen = [...winnersList];
      $('#repeatPlay').show();
    }

    setTopTen([...newTopTen]);
  }, [winnersList, myScore, qualifyingScore]);

  return (
    <div id="topTen" className={styles.topTen}>
      <h4 style={{ marginBottom: '5vh' }}>
        {iMadeTopTen ? 'You Made The Top Ten!!!' : 'Behold The Top Ten'}
      </h4>
      <Form onSubmit={(e) => submitScore(e)}>
        {topTen.map((t, i) => {
          const str = createRandomString(7);
          const hasInitials = t.initials;
          const k = str + hasInitials;
          const iLength = hasInitials.length;
          const firstInitial = iLength > 0 ? hasInitials[0] : '';
          const secondInitial = iLength > 1 ? hasInitials[1] : '';
          const thirdInitial = iLength > 2 ? hasInitials[2] : '';
          return (
            <div key={k} className={styles.winnerLine}>
              <span style={{ whiteSpace: 'nowrap' }}>
                {i < 9 ? `   #${i + 1} -` : `#${i + 1}-`}
              </span>
              <div className={styles.innerStats}>
                <input
                  type="text"
                  autoFocus={!hasInitials ? 'autofocus' : null}
                  className="initial"
                  maxLength="1"
                  disabled={hasInitials ? true : false}
                  value={hasInitials ? firstInitial : initials.first}
                  onChange={(e) =>
                    setInitials({ ...initials, first: e.target.value })
                  }
                  required={hasInitials ? false : true}
                ></input>

                <input
                  type="text"
                  className="initial"
                  maxLength="1"
                  disabled={hasInitials ? true : false}
                  value={hasInitials ? secondInitial : initials.second}
                  onChange={(e) =>
                    setInitials({ ...initials, second: e.target.value })
                  }
                  required={hasInitials ? false : true}
                ></input>
                <input
                  type="text"
                  className="initial"
                  maxLength="1"
                  disabled={hasInitials ? true : false}
                  value={hasInitials ? thirdInitial : initials.third}
                  onChange={(e) =>
                    setInitials({ ...initials, third: e.target.value })
                  }
                  style={{
                    visibility:
                      hasInitials && !thirdInitial ? 'hidden' : 'visible',
                  }}
                ></input>
              </div>

              <span>&nbsp;-&nbsp;{Number(t.score).toFixed(3)}</span>
            </div>
          );
        })}
        <Button
          type="submit"
          id="submitScoreBtn"
          style={{ display: iMadeTopTen ? 'initial' : 'none' }}
        >
          Next
        </Button>
      </Form>
      <PlayAgain />
    </div>
  );
}
