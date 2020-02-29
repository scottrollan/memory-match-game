import React, { Component } from "react";
import styles from "./Game.css";
import PlayAgain from "./PlayAgain";
import Board from "./Board";
import PickLevel from "./PickLevel";
import GameHead from "./GameHead";
import Timer from "./Timer";
import YouWin from "./YouWin";
import YouLose from "./YouLose";
import Ace1 from "./media/Ace1.png";
import King1 from "./media/King1.png";
import Queen1 from "./media/Queen1.png";
import Jack1 from "./media/Jack1.png";
import Ten1 from "./media/Ten1.png";
import Nine1 from "./media/Nine1.png";
import Eight1 from "./media/Eight1.png";
import Seven1 from "./media/Seven1.png";
import Six1 from "./media/Six1.png";
import Five1 from "./media/Five1.png";
import Ace2 from "./media/Ace2.png";
import King2 from "./media/King2.png";
import Queen2 from "./media/Queen2.png";
import Jack2 from "./media/Jack2.png";
import Ten2 from "./media/Ten2.png";
import Nine2 from "./media/Nine2.png";
import Eight2 from "./media/Eight2.png";
import Seven2 from "./media/Seven2.png";
import Six2 from "./media/Six2.png";
import Five2 from "./media/Five2.png";

class Game extends Component {
  constructor(props) {
    super(props);
    this.playArea = React.createRef();  
  }
  state = {
    time: 2,
    gameStarted: false,
    matchesFound: 0,
    score: 0,
    bonus: 0,
    cards: [
      { id: "Ac1", face: "ace", card: Ace1 },
      { id: "Ac2", face: "ace", card: Ace2 },
      { id: "Kg1", face: "kin", card: King1 },
      { id: "Kg2", face: "kin", card: King2 },
      { id: "Qn1", face: "que", card: Queen1 },
      { id: "Qn2", face: "que", card: Queen2 },
      { id: "Jk1", face: "jac", card: Jack1 },
      { id: "Jk2", face: "jac", card: Jack2 },
      { id: "Tn1", face: "ten", card: Ten1 },
      { id: "Tn2", face: "ten", card: Ten2 },
      { id: "Nn1", face: "nin", card: Nine1 },
      { id: "Nn2", face: "nin", card: Nine2 },
      { id: "Et1", face: "eig", card: Eight1 },
      { id: "Et2", face: "eig", card: Eight2 },
      { id: "Sv1", face: "sev", card: Seven1 },
      { id: "Sv2", face: "sev", card: Seven2 },
      { id: "Sx1", face: "six", card: Six1 },
      { id: "Sx2", face: "six", card: Six2 },
      { id: "Fv1", face: "fiv", card: Five1 },
      { id: "Fv2", face: "fiv", card: Five2 }
    ]
  };


  addMatch = () => {
    this.setState({ matchesFound: this.state.matchesFound + 1 });
  };
  resetMatch = () => {
    const playAgain = document.getElementById("playAgain");
    // const game = document.getElementById('game');
    setTimeout(() => {
      if (this.state.matchesFound === 10) {
        // game.classList.remove(pyroStyles);
        playAgain.style.display = "flex";
      } else {
        playAgain.style.display = "none";
      }
    }, 500);
  };

  youLose = () => {
    document.getElementById("youLose").display = "inline-block";
  };

  subtractSecond = () => {
    this.setState({ time: this.state.time - 1 });
    this.startTimer();
  };

  startTimer = () => {
    const playAgain = document.getElementById("playAgain");
    const youLose = document.getElementById("youLose");
    const timer = document.getElementById("timer");
    const youWin = document.getElementById("youWin");
    if (this.state.matchesFound < 10 && this.state.time > 0) {
      setTimeout(() => {
        this.subtractSecond();
      }, 1000);
    } else if (this.state.matchesFound === 10) {
      const setScore = this.state.time * 3.14159 + this.state.bonus;
      this.setState({ score: setScore.toFixed(3) });
      setTimeout(() => {
        playAgain.style.display = "block";
        youWin.style.display = "block";
        timer.style.display = "none";
      }, 500);
    } else if (this.state.matchesFound < 10 && this.state.time === 0) {
      playAgain.style.display = "block";
      timer.style.display = "none";
      youLose.style.display = "block";
    }
  };

  openTimer = () => {
    document.getElementById("gameHead").style.display = "none";
    document.getElementById("timer").style.display = "block";
    document.getElementById("playArea").style.display = 'block';
    this.playArea.current.focus();
    this.startTimer();
  };

  startGame = () => {
    let i = 0; // shuffle deck
    const array = this.state.cards;
    for (i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    document.getElementById("pickLevel").style.display = "none";
    document.getElementById("gameBoard").style.display = "inline-block";
    if (this.state.gameStarted === false) {
      this.setState({ gameStarted: true });
      this.openTimer();
    }
  };

  pickLevel = event => {
    const setTime = event.target.dataset.time;
    let setBonus = (80 - event.target.dataset.time) * 2;
    console.log("time: " + setTime + ", bonusPoints: " + setBonus);
    this.setState({ time: setTime, bonus: setBonus });
    this.startGame();
  };

  render() {
    return (
      <div className={styles.game}>
        <div id="scoreboard" className={styles.scoreboard}>
          <GameHead />
          <Timer time={this.state.time} />
          <YouWin score={this.state.score} />
          <YouLose />
        </div>
        <div id="playArea" ref={this.playArea} className={styles.playArea}>
          <PlayAgain />
          <PickLevel pickLevel={event => this.pickLevel(event)} />
          <Board
            onClick={this.startGame}
            addMatch={this.addMatch}
            resetMatch={this.resetMatch}
            time={this.state.time}
            cards={this.state.cards}
          />

        </div>
      </div>
    );
  }
}

export default Game;
