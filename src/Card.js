import React from 'react';
import CardBack from './media/red_back.png';
import x from './media/x.png';
import $ from 'jquery';
import styles from './Board.css';

const Card = (props) => {
  const flipCard = (event) => {
    $(`#${props.id}`).css('transform', 'rotateY(180deg)');
    props.handleFlip(event);
  };

  const cardX = `${props.id}X`;
  const cardMove = `${props.id}Move`;
  return (
    <div className={styles.cardHolder}>
      <div className={styles.cardMove} id={cardMove}>
        <div
          key={props.id}
          className={styles.card}
          id={props.id}
          data-value={props.value}
        >
          <img
            src={CardBack}
            className={styles.cardBack}
            alt=""
            data-value={props.value}
            onClick={(event) =>
              props.flippedCards < 2 && props.time > 0 ? flipCard(event) : null
            }
          />
          <img
            src={props.src}
            className={styles.cardFace}
            alt=""
            style={{
              transform: `rotateY(180deg)`,
            }}
          />
          <img // this is the big red X
            src={x}
            alt=""
            className={styles.cardFace}
            id={cardX}
            style={{
              zIndex: 999,
              visibility: 'hidden',
              transform: `rotateY(180deg)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
