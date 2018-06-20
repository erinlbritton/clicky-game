import React, { Component } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    currentScore: 0,
    topScore: 0
  };

  // Fisher-Yates Shuffle from https://www.frankmitchell.org/2015/01/fisher-yates/
  shuffle = (array) => {
    let i = 0
      , j = 0
      , temp = null
  
    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array;
  };

  gameOver = () => {
    
    let clickedCards = this.state.cards.filter(card => card.hasBeenClicked === true);
    clickedCards.map(card => card.hasBeenClicked = false);
    this.setState(
      {
        currentScore: 0,
        cards: this.shuffle(this.state.cards)
      }
    )
  }

  handleClick = (name) => {
    let currentCard = this.state.cards.filter(card => card.name === name);
    if (currentCard[0].hasBeenClicked) {
      this.gameOver();
    } else if (!currentCard[0].hasBeenClicked && this.state.currentScore === 11) {
      let topScore = this.state.topScore + 1;
      this.setState({ topScore: topScore });
      alert("You win!");
      this.gameOver();
    } else {
      currentCard[0].hasBeenClicked = true;
      let currentScore = this.state.currentScore + 1;
      let topScore = this.state.topScore;
      if (currentScore > topScore) {
        topScore = currentScore;
      } 
      this.setState(
        { 
          currentScore: currentScore,
          topScore: topScore,
          cards: this.shuffle(this.state.cards) 
        }
      );
    }
    // We always use the setState method to update a component's state
    
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Navbar 
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <div className="container">
          <div className="row parent-row">
            <div className="col-md-10 col-md-offset-1">
              <div className="row">
                {this.state.cards.map(card => (
                    <Card
                      key={card.name}
                      name={card.name}
                      image={card.image}       
                      // clicked={card.hasBeenClicked}   // Uncomment to validate        
                      handleClick={this.handleClick}
                    />
                ))} 
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
