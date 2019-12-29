import React, { Component } from "react";
import styles from "./Game.css";

class PlayAgain extends Component {
  render(props) {
    return (
      <a href="."><button
        className={styles.playBtn}
        id="playAgain"
        style={{ display: "none" }}
      >
        play again
      </button></a>
    );
  }
}

export default PlayAgain;
