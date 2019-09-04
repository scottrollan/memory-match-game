import React, { Component } from 'react';
import './Game.css';
import Board from './Board';
import PickLevel from './PickLevel';
import GameHead from './GameHead';
import Timer from './Timer';
import YouWin from './YouWin';
import YouLose from './YouLose';
import Pyro from './Pyro';
import PlayAgain from './PlayAgain';
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
import Ace2 from './media/Ace2.png';
import King2 from './media/King2.png';
import Queen2 from './media/Queen2.png';
import Jack2 from './media/Jack2.png';
import Ten2 from './media/Ten2.png';
import Nine2 from './media/Nine2.png';
import Eight2 from './media/Eight2.png';
import Seven2 from './media/Seven2.png';
import Six2 from './media/Six2.png';
import Five2 from './media/Five2.png';

class Game extends Component {
  state = {
    time: 2,
    gameStarted: false,
    matchesFound: 0,
    beginningTime: 0,
    score: 0,
    deck: [
      Ace1, Ace2, King1, King2, Queen1,
      Queen2, Jack1, Jack2, Ten1, Ten2,
      Nine1, Nine2, Eight1, Eight2, Seven1,
      Seven2, Six1, Six2, Five1, Five2
  ],
  }
  
  addMatch = () => {
    this.setState({ matchesFound: this.state.matchesFound + 1 });
  };
  resetMatch = () => {
    const playAgain = document.getElementById("playDiv");
    const pyro = document.getElementById('pyro');
    setTimeout(() => {   
        if (this.state.matchesFound === 10) {
            pyro.style.display = "block"
            playAgain.style.display = "block";
        } else {
        playAgain.style.display = "none";
        }
    }, 500);
  };

  youLose = () => {
    document.getElementById('youLose').display = 'inline-block'
  };

  subtractSecond = () => {
    this.setState({ time: this.state.time - 1 });
    this.startTimer();
  }

  startTimer = () => {
    const playAgain = document.getElementById("playDiv");
    const pyro = document.getElementById('pyro');
    const youLose = document.getElementById('youLose');
    const timer = document.getElementById('timer');
    const youWin = document.getElementById('youWin');
    if(this.state.matchesFound < 10 && this.state.time > 0 ) {
      setTimeout(() => {
        this.subtractSecond();
      }, 1000);
    }else if(this.state.matchesFound === 10){
      const setScore = (this.state.beginningTime - (this.state.beginningTime - this.state.time)) * 3.14159;
      this.setState({ score: (setScore + .411).toFixed(3) })
      setTimeout(() => {
        pyro.style.display = "block"
        playAgain.style.display = "block";
        youWin.style.display="block";
        timer.style.display = "none"
      }, 500);
    } else if(this.state.matchesFound < 10 && this.state.time === 0){
      playAgain.style.display = "block";
      timer.style.display = "none"
      youLose.style.display = "block";
    };
  };
  


  openTimer = () => {
    document.getElementById('gameHead').style.display = "none";
    document.getElementById('timer').style.display = "inline-block";
    this.startTimer();
  };

  startGame = () => {
    let i = 0;  // shuffle deck
    const array = this.state.deck;
      for (i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      };
    document.getElementById('pickLevel').style.display = 'none';
    document.getElementById('gameBoard').style.display = 'inline-block';
    if(this.state.gameStarted === false){
      this.setState({ gameStarted: true });
      this.openTimer();
    };
  };
  pickLevel = (event) => {
    const setTime = event.target.value;
    this.setState({ beginningTime: setTime,
                    time: setTime })
    this.startGame();
  }

  render() {
    return (
      <div 
        className="game"
        >
        <div id="scoreboard"
          style={{ height: '8vh' }}>
          <GameHead/>
          <Timer time={this.state.time}/>
          <YouWin score={this.state.score}/>
          <YouLose/>
        </div>
        <PickLevel level={this.pickLevel}/>
        <Board
          onClick={this.startGame}
          addMatch={this.addMatch}
          resetMatch={this.resetMatch}
          time={this.state.time}
          deck={this.state.deck}/>
        <Pyro/>
        <PlayAgain/>
      </div>
    );
  }
}

export default Game;