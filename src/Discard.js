import React, { Component } from 'react';
import styles from './board.css';
import Ace1 from './media/Ace1.png';
import King1 from './media/King1.png';
import Queen1 from './media/Queen1.png';
import Jack1 from './media/Jack1.png';
import Ten1 from './media/Ten1.png';
import Nine1 from './media/Nine1.png';
import Eight1 from './media/Eight1.png';
import Seven1 from './media/Seven1.png';
import Six1 from './media/Six1.png';
import Five1 from './media/Five1.png';

const pairs = [
  {
    name: 'A',
    src: Ace1,
    id: 'aceDiscarded',
  },
  {
    name: '5',
    src: Five1,
    id: 'fivDiscarded',
  },
  {
    name: '6',
    src: Six1,
    id: 'sixDiscarded',
  },
  {
    name: '7',
    src: Seven1,
    id: 'sevDiscarded',
  },
  {
    name: '8',
    src: Eight1,
    id: 'eigDiscarded',
  },
  {
    name: '9',
    src: Nine1,
    id: 'ninDiscarded',
  },
  {
    name: '10',
    src: Ten1,
    id: 'tenDiscarded',
  },
  {
    name: 'J',
    src: Jack1,
    id: 'jacDiscarded',
  },
  {
    name: 'Q',
    src: Queen1,
    id: 'queDiscarded',
  },
  {
    name: 'K',
    src: King1,
    id: 'kinDiscarded',
  },
];

const Discard = () => {
  return (
    <div id="discard" className={styles.discardRow}>
      {pairs.map((c, index) => (
        <img
          key={`${c.name}${index}`}
          style={{ visibility: 'hidden' }}
          src={c.src}
          className={styles.discarded}
          id={c.id}
          alt=""
        />
      ))}
    </div>
  );
};

export default Discard;
