import React, { Component } from "react";
import styles from "./Game.css";

class PlayAgain extends Component {
  render(props) {
    return (
      <button
        className={styles.playBtn}
        id="playAgain"
        style={{ display: "none" }}
      >
        <a href="." style={{ textDecoration: 'none' }}>play again</a>
      </button>
    );
  }
}

export default PlayAgain;
