import React, { useState, useEffect } from 'react';
import styles from './card.css';
import Discard from './Discard';
import Card from './Card';
import $ from 'jquery';

const boardStyle = {
  width: '100%',
  height: '100%',
  display: 'none',
};

const Board = (props) => {
  const [flippedCards, setFlippedCards] = useState(0);
  const [flippedOne, setFlippedOne] = useState('');
  const [flippedStoreOne, setFlippedStoreOne] = useState('');
  const [flippedTwo, setFlippedTwo] = useState('');
  const [flippedStoreTwo, setFlippedStoreTwo] = useState('');
  const [matchesFound, setMatchesFound] = useState(props.matchesFound);
  const [faceValue, setFaceValue] = useState('');

  const resetMatch = () => {
    setFlippedOne('');
    setFlippedStoreOne('');
    setFlippedTwo('');
    setFlippedStoreTwo('');
    setFlippedCards(0);
  };

  const handleNoMatch = () => {
    console.log('handleNoMatch fired.');
    setTimeout(() => {
      $(`#${flippedStoreOne}X`).css('visibility', 'visible'); // the big, red X appears over non-matching cards
      $(`#${flippedStoreTwo}X`).css('visibility', 'visible');
    }, 300);
    setTimeout(() => {
      $(`#${flippedStoreOne}X`).css('visibility', 'hidden'); // the big, red X disappears from cards
      $(`#${flippedStoreTwo}X`).css('visibility', 'hidden');
    }, 600);

    setTimeout(() => {
      $(`#${flippedStoreOne}`).css('transform', 'rotate(0deg)');
      $(`#${flippedStoreTwo}`).css('transform', 'rotate(0deg)');
    }, 400);
    resetMatch();
  };

  const handleMatch = () => {
    props.addMatch(); //adds a number to state.matchesFound in Game.js
    $(`#${flippedStoreOne}Move`).addClass(styles['moveToDiscard']);
    $(`#${flippedStoreTwo}Move`).addClass(styles['moveToDiscard']);
    $(`#${faceValue}`).css('visibility', 'visible');
    $(`#${faceValue}`).addClass(styles['discardBig']);
    setTimeout(() => {
      $(`#${flippedStoreOne}`).css('visibility', 'hidden');
      $(`#${flippedStoreTwo}`).css('visibility', 'hidden');
    }, 500);
    resetMatch();
  };

  const checkForMatch = () => {
    console.log('checkForMatch fired.');
    if (flippedOne === flippedTwo) {
      //if the two flipped cards match
      handleMatch();
    } else {
      handleNoMatch();
    }
  };

  const handleFlip = (event, id, face) => {
    const cardStoreValue = id; //e.g. "Ace1" or "Ten2"
    const cardValue = face; //e.g. "ace" or "ten"
    const cardValueDiscarded = `${cardValue}Discarded`;
    setFaceValue(cardValueDiscarded); // "aceDiscarded"
    if (flippedCards === 0) {
      //if no cards have been flipped yet...
      setFlippedOne(cardValue);
      setFlippedStoreOne(cardStoreValue);
    } else {
      //assign clicked card to flippedOne, otherwise...
      setFlippedTwo(cardValue);
      setFlippedStoreTwo(cardStoreValue);
    } //assign clicked card to flippedTwo
    setFlippedCards(flippedCards + 1); //then add one to number of flipped cards
  };

  useEffect(() => {
    if (flippedCards === 2) {
      checkForMatch();
    }
  }, [checkForMatch]);

  return (
    <div id="gameBoard" style={boardStyle}>
      <Discard />
      <div className={styles.playArea} id="playArea">
        {props.cards.map((c, index) => (
          <Card
            key={index}
            src={c.card}
            id={c.id} //e.g. Ace1, Ten2, Svn1...
            value={c.face} //e.g. ace, ten, sev...
            time={props.time}
            handleFlip={(event) => handleFlip(event, c.id, c.face)}
            flippedCards={flippedCards}
          />
        ))}
        ;
      </div>
    </div>
  );
};

export default Board;
