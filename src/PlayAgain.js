import React, { Component } from "react";
import styles from "./Game.css";

class PlayAgain extends Component {
  render(props) {
    return (
      <section style={{ padding: "10% 0", display: "none" }} id="playAgain">
        <div className={styles.PlayAgain}>
          <a href=".">
            <button>play again</button>
          </a>
        </div>
      </section>
    );
  }
}

export default PlayAgain;
