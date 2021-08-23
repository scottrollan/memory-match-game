import React from 'react';
import LevelButton from './LevelButton';
import styles from './Game.css';

const PickLevel = (props) => {
  const levels = [
    { level: 1, name: 'easy peasy', id: 'easy', time: 80 },
    { level: 2, name: '...meh', id: 'medium', time: 60 },
    { level: 3, name: 'yikes!', id: 'hard', time: 48 },
  ];

  return (
    <section style={{ padding: '10% 0' }} id="pickLevel">
      <h1 style={{ color: 'whitesmoke' }}>pick a level</h1>
      <div className={styles.pickLevel}>
        {levels.map((l, index) => (
          <LevelButton
            key={index}
            level={l.level}
            id={l.id}
            time={l.time}
            className={styles.levelBtn}
            pickLevel={(event) => props.pickLevel(event)}
            name={l.name}
          />
        ))}
      </div>
    </section>
  );
};
export default PickLevel;
