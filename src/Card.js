import React, { Component } from 'react';
import CardBack from './media/gray_back.png';
import x from './media/x.png';
import styles from './card.css';

class Card extends Component {
  state = {
    discarded: false,
  };
  flipCard = (event) => {
    document.getElementById(this.props.id).style.transform = 'rotateY(180deg)';
    this.props.handleFlip(event);
  };

  render(props) {
    const cardX = `${this.props.id}X`;
    const cardMove = `${this.props.id}Move`;
    return (
      <div className={styles.cardHolder}>
        <div className={styles.cardMove} id={cardMove}>
          <div
            key={this.props.id}
            className={styles.card}
            id={this.props.id}
            data-value={this.props.value}
          >
            <img
              src={CardBack}
              className={styles.cardBack}
              alt=""
              data-value={this.props.value}
              onClick={(event) =>
                this.props.flippedCards < 2 && this.props.time > 0
                  ? this.flipCard(event)
                  : null
              }
            />
            <img
              src={this.props.src}
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
  }
}

export default Card;
