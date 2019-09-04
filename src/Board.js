import React from 'react';
import './board.css';
import Discard from './Discard';
import Card from './Card';

const boardStyle = {
    width: '100vw',
    height: "90vh",
    display: 'none'
}

class Board extends React.Component {
    constructor(props) {
        super(props);   
        this.state = {
            flippedCards: 0,
            flippedOne: '',
            flippedStoreOne: '',
            flippedTwo: '',
            flippedStoreTwo: '',
            matchesFound: this.props.matchesFound,
            faceValue: ''
        };
    };

    resetMatch = () => {
        this.setState({ flippedOne: '',
                        flippedStoreOne: '',
                        flippedTwo: '',
                        flippedStoreTwo: '',
                        flippedCards: 0,
                     })
    }
    
    handleNoMatch = () => {
        const unmatched1 = document.getElementById(this.state.flippedStoreOne);
        const unmatched2 = document.getElementById(this.state.flippedStoreTwo);        
        const unmatched1X = document.getElementById(`${this.state.flippedStoreOne}X`);
        const unmatched2X = document.getElementById(`${this.state.flippedStoreTwo}X`);        

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
            unmatched1.style.transform = 'rotate(0deg)';
            unmatched2.style.transform = 'rotate(0deg)';
        }, 400);

    }


    handleMatch = () => {
        this.props.addMatch();  //adds a number to state.matchesFound in Game.js           
        const remove1 = document.getElementById(this.state.flippedStoreOne);
        const remove2 = document.getElementById(this.state.flippedStoreTwo); 
        const remove1Move = document.getElementById(`${this.state.flippedStoreOne}Move`);
        const remove2Move = document.getElementById(`${this.state.flippedStoreTwo}Move`);;
        const discard = document.getElementById(this.state.faceValue);      ;        
        remove1Move.classList.add('moveToDiscard');
        remove2Move.classList.add('moveToDiscard');
        discard.style.visibility = "visible";
        discard.classList.add('discardBig');
        setTimeout(() => {
            remove1.style.visibility = "hidden";
            remove2.style.visibility = "hidden";            
        }, 500);
        
        this.resetMatch();
    }

    checkForMatch = () => {
        if(this.state.flippedOne === this.state.flippedTwo) { //if the two flipped cards match
            this.handleMatch();
        }else{
        this.handleNoMatch();
        }
    };

    handleFlip = (event) => {
        const cardStoreValue = event.target.dataset.value; //e.g. "Ace1" or "Ace2"
        // const cardValue = cardStoreValue.slice(18,-1); //e.g. "Ace"
        const cardValue = event.target.dataset.value.slice(0,-1); //e.g. "Ace"
        console.log(cardStoreValue, cardValue);
        const cardValueDiscarded = `${cardValue}Discarded`
        this.setState({ faceValue: cardValueDiscarded }); // "AceDiscarded"
        this.state.flippedCards === 0 ?  //if no cards have been flipped yet...
            this.setState({ flippedOne: cardValue, flippedStoreOne: cardStoreValue }) : //assign clicked card to flippedOne, otherwise...
            this.setState({ flippedTwo: cardValue, flippedStoreTwo: cardStoreValue, });  //assign clicked card to flippedTwo
        this.setState({ flippedCards: this.state.flippedCards + 1 });  //then add one to number of flipped cards
        setTimeout(() => {
            if(this.state.flippedCards > 1){ //gives state a chance to update before checking if 2 cards flipped...
                this.checkForMatch();        //then checks for match
            };
        }, 500);
    };

    render(props) {
        return(
                <div 
                    id="gameBoard"
                    style={boardStyle}>
                    <Discard />
                    {this.props.deck.map(data => (
                        <Card   
                            key={data} 
                            src={data} 
                            id={data.substr(14).slice(0, -13)} //e.g. Ace1, Ace2    
                            value={data.substr(14).slice(0, -13)}  //e.g. Ace1, Ace2
                            time={this.props.time}
                            handleFlip={this.handleFlip}
                            flippedCards={this.state.flippedCards}
                        />  
                    ))}
                    
                </div>
        )
    };
};

export default Board;
