import React, { useState, useEffect } from 'react';
import { sendNewWinner } from './constants/index.js';
import { createRandomString } from './constants/CreateRandomString';
import { Form, Button } from 'react-bootstrap';
import $ from 'jquery';
import styles from './TopTen.css';

export default function TopTen({ winnersList, yourScore }) {
  const [newTopTen, setNewTopTen] = useState([]);
  const [initials, setInitials] = useState({
    first: '',
    second: '',
    third: '',
  });
  const submitScore = async (event) => {
    event.preventDefault();
    const inputInitials = initials.first + initials.second + initials.third;
    const winnerInitials = inputInitials.trim();
    const winnerScore = Number(yourScore);
    const winner = {
      _type: 'winner',
      initials: winnerInitials,
      score: winnerScore,
    };
    const res = await sendNewWinner(winner);
    console.log(res);
    $('#repeatPlay').show();
    $('#submitScoreBtn').hide();
    $('.initial').prop('disabled', true);
  };

  useEffect(() => {
    let oldWinnersList = winnersList.sort((a, b) => {
      return b.score - a.score;
    });
    let newWinnersList = oldWinnersList.slice(0, 8); //removes [9] (lowest score)
    newWinnersList = [
      ...newWinnersList,
      {
        //adds new record without initials
        _type: 'winner',
        initials: '',
        score: yourScore,
      },
    ];
    let topTen = newWinnersList.sort((a, b) => {
      return b.score - a.score;
    });
    setNewTopTen([...topTen]);
  }, [winnersList, yourScore]);

  return (
    <div id="topTen" className={styles.topTen}>
      <h4>Congrats! You made the top ten!!</h4>
      <Form onSubmit={(e) => submitScore(e)}>
        {newTopTen.map((t, i) => {
          const str = createRandomString(7);
          const hasInitials = t.initials;
          const k = str + hasInitials;
          const iLength = hasInitials.length;
          const firstInitial = iLength > 0 ? hasInitials[0] : '';
          const secondInitial = iLength > 1 ? hasInitials[1] : '';
          const thirdInitial = iLength > 2 ? hasInitials[2] : '';
          return (
            <div key={k} className={styles.winnerLine}>
              <span>#{i + 1} - </span>
              <input
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
                className="initial"
                maxLength="1"
                disabled={hasInitials ? true : false}
                value={hasInitials ? thirdInitial : initials.third}
                onChange={(e) =>
                  setInitials({ ...initials, third: e.target.value })
                }
              ></input>
              <span> - {t.score}</span>
            </div>
          );
        })}
        <Button type="submit" id="submitScoreBtn">
          Next
        </Button>
      </Form>
    </div>
  );
}
