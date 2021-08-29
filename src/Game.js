import React, { Component } from 'react';
import Board from './Board';
import PickLevel from './PickLevel';
import GameHead from './GameHead';
import Timer from './Timer';
import EndOfGame from './EndOfGame';
import { CardArray } from './constants/CardArray';
import { fetchTopTen } from './constants/index';
import $ from 'jquery';
import styles from './Game.css';

class Game extends Component {
  state = {
    time: 20,
    gameStarted: false,
    matchesFound: 0,
    score: 0,
    bonus: 0,
    level: 0,
    cards: [],
    stats: {},
  };

  addMatch = () => {
    const currentMatches = this.state.matchesFound + 1;
    this.setState({ matchesFound: currentMatches });
  };

  resetMatch = () => {
    const repeatPlay = $('#playAgain');
    setTimeout(() => {
      if (this.state.matchesFound === 10) {
        repeatPlay.css('display', 'flex');
      } else {
        repeatPlay.css('display', 'none');
      }
    }, 500);
  };

  subtractTenthSecond = () => {
    this.setState({ time: this.state.time - 0.1 });
    this.startTimer();
  };

  startTimer = () => {
    if (this.state.matchesFound < 10 && this.state.time < 0.01) {
      //time reaches 0 without all matches found
      $('#timer').hide();
      $('#endOfGame').show();
      $('#playArea').hide();
      $('#discard').hide();
    } else if (this.state.matchesFound < 10 && this.state.time > 0) {
      //time is not up yet, timer keeps ticking
      setTimeout(() => {
        this.subtractTenthSecond();
      }, 100);
    } else if (this.state.matchesFound === 10) {
      //all matches found before timer goes off - YOU WIN!!!!!
      const putScore = this.state.time * 3.14159 + this.state.bonus;
      this.setState({ score: Number(putScore).toFixed(3) });
      setTimeout(() => {
        $('#endOfGame').show();
        $('#timer').hide();
        $('#playArea').hide();
        $('#discard').hide();
      }, 500);
    }
  };

  startGame = () => {
    let i = 0; // shuffle deck
    const array = CardArray;
    for (i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    this.setState({ cards: [...array] });
    $('#pickLevel').hide();
    $('#gameBoard').css('display', 'flex');
    if (!this.state.gameStarted) {
      this.setState({ gameStarted: true });
    }
    $('#gameHead').hide();
    $('#timer').show();
    $('#playArea').show();
    this.startTimer();
  };

  pickLevel = (event) => {
    const myLevel = Number(event.target.dataset.level);
    const levelTime = Number(event.target.dataset.time);
    this.setState({ time: levelTime, level: myLevel });
    let levelBonus = (80 - levelTime) * 2;
    this.setState({ bonus: levelBonus });
    this.startGame();
  };

  componentDidMount() {
    const getTopTen = async () => {
      let winnerObj = await fetchTopTen();
      winnerObj = { ...winnerObj, level: this.state.level };
      this.setState({ stats: winnerObj });
      console.log(winnerObj); //2 keys: 'winners' array and 'qualifier' number
    };
    getTopTen();
  }

  render() {
    return (
      <div className={styles.game} id="game">
        <div id="scoreboard" className={styles.scoreboard}>
          <GameHead />
          <Timer time={this.state.time} />
          <EndOfGame
            score={this.state.score}
            level={this.state.level}
            gameStarted={this.state.gameStarted}
            stats={this.state.stats}
          />
        </div>
        <div className={styles.flipArea}>
          {/* <PlayAgain /> */}
          <PickLevel pickLevel={this.pickLevel} />
          <Board
            addMatch={this.addMatch}
            resetMatch={this.resetMatch}
            time={this.state.time}
            cards={this.state.cards}
            startTimer={this.startTimer}
          />
        </div>
      </div>
    );
  }
}
export default Game;
