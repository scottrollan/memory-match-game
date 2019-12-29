import React, { Component } from "react";
import styles from "./card.css";
import Discard from "./Discard";
import Card from "./Card";
import PlayAgain from "./PlayAgain";

const boardStyle = {
  width: "63vh",
  minWidth: "63vh",
  height: "100%",
  display: "none"
};

class Board extends Component {
  state = {
    flippedCards: 0,
    flippedOne: "",
    flippedStoreOne: "",
    flippedTwo: "",
    flippedStoreTwo: "",
    matchesFound: this.props.matchesFound,
    faceValue: ""
  };

  resetMatch = () => {
    this.setState({
      flippedOne: "",
      flippedStoreOne: "",
      flippedTwo: "",
      flippedStoreTwo: "",
      flippedCards: 0
    });
  };

  handleNoMatch = () => {
    const unmatched1 = document.getElementById(this.state.flippedStoreOne);
    const unmatched2 = document.getElementById(this.state.flippedStoreTwo);
    const unmatched1X = document.getElementById(
      `${this.state.flippedStoreOne}X`
    );
    const unmatched2X = document.getElementById(
      `${this.state.flippedStoreTwo}X`
    );

    setTimeout(() => {
      unmatched1X.style.visibility = "visible"; // the big, red X appears over non-matching cards
      unmatched2X.style.visibility = "visible";
    }, 300);
    setTimeout(() => {
      unmatched1X.style.visibility = "hidden"; // the big, red X disappears from cards
      unmatched2X.style.visibility = "hidden";
    }, 600);
    setTimeout(() => {
      this.resetMatch();
      unmatched1.style.transform = "rotate(0deg)";
      unmatched2.style.transform = "rotate(0deg)";
    }, 400);
  };

  handleMatch = () => {
    this.props.addMatch(); //adds a number to state.matchesFound in Game.js
    const remove1 = document.getElementById(this.state.flippedStoreOne);
    const remove2 = document.getElementById(this.state.flippedStoreTwo);
    const remove1Move = document.getElementById(
      `${this.state.flippedStoreOne}Move`
    );
    const remove2Move = document.getElementById(
      `${this.state.flippedStoreTwo}Move`
    );
    const discard = document.getElementById(this.state.faceValue);
    remove1Move.classList.add(styles["moveToDiscard"]);
    remove2Move.classList.add(styles["moveToDiscard"]);
    discard.style.visibility = "visible";
    discard.classList.add(styles["discardBig"]);
    setTimeout(() => {
      remove1.style.visibility = "hidden";
      remove2.style.visibility = "hidden";
    }, 500);

    this.resetMatch();
  };

  checkForMatch = () => {
    if (this.state.flippedOne === this.state.flippedTwo) {
      //if the two flipped cards match
      this.handleMatch();
    } else {
      this.handleNoMatch();
    }
  };

  handleFlip = (event, id, face) => {
    const cardStoreValue = id; //e.g. "Ace1" or "Ten2"
    const cardValue = face; //e.g. "ace" or "ten"
    const cardValueDiscarded = `${cardValue}Discarded`;
    this.setState({ faceValue: cardValueDiscarded }); // "aceDiscarded"
    this.state.flippedCards === 0 //if no cards have been flipped yet...
      ? this.setState({
          flippedOne: cardValue,
          flippedStoreOne: cardStoreValue
        }) //assign clicked card to flippedOne, otherwise...
      : this.setState({
          flippedTwo: cardValue,
          flippedStoreTwo: cardStoreValue
        }); //assign clicked card to flippedTwo
    this.setState({ flippedCards: this.state.flippedCards + 1 }); //then add one to number of flipped cards
    setTimeout(() => {
      if (this.state.flippedCards > 1) {
        //gives state a chance to update before checking if 2 cards flipped...
        this.checkForMatch(); //then checks for match
      }
    }, 500);
  };

  render(props) {
    return (
      <div id="gameBoard" style={boardStyle}>
        <Discard />
        <div className={styles.playArea}>
          {this.props.cards.map((c, index) => (
            <Card
              key={index}
              src={c.card}
              id={c.id} //e.g. Ace1, Ten2, Svn1...
              value={c.face} //e.g. ace, ten, sev...
              time={this.props.time}
              handleFlip={event => this.handleFlip(event, c.id, c.face)}
              flippedCards={this.state.flippedCards}
            />
          ))}
        </div>
        <PlayAgain />
      </div>
    );
  }
}

export default Board;
