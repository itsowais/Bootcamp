import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const number1 = Math.floor(Math.random() * 100);
const number2 = Math.floor(Math.random() * 100);
const number3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + number1 + number2 + number3;
const numQuestions = 0;
const numCorrect = 0;
class App extends Component {
  state={
    number1:Math.floor(Math.random() * 100),
    number2:Math.floor(Math.random() * 100),
    number3:Math.floor(Math.random() * 100),   
    proposedAnswer:0,
    numQuestions:0,
    numCorrect:0,
  }
  handleClick = (e) => {
    if(e.target.name==='True'){
      if(this.proposedAnswer===this.state.number1+this.state.number2+this.state.number3){
        this.setState({numQuestions:++this.state.numQuestions,
                        numCorrect:++this.state.numCorrect
        });
        this.setNumbers();
      }
      else{
        this.setState({numQuestions:++this.state.numQuestions});
       this.setNumbers();
      }
    }
    else{
     if(this.proposedAnswer===this.state.number1+this.state.number2+this.state.number3){
      this.setState({numQuestions:++this.state.numQuestions});
      this.setNumbers();
    }
      else{
        this.setState({numQuestions:++this.state.numQuestions,
          numCorrect:++this.state.numCorrect});
          this.setNumbers();
      }
    }    
    }
  setNumbers(){
    this.setState({
      number1:Math.floor(Math.random() * 100),
      number2:Math.floor(Math.random() * 100),
      number3:Math.floor(Math.random() * 100), 
      proposedAnswer:Math.floor(Math.random() * 3) + this.state.number1 + this.state.number2 + this.state.number3
    })
  }
  componentDidMount(){
  this.setNumbers();
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Bootcamp - Train the Trainer - Coding Practice</h1>        
	</header>
        <div className="game">
          <h2>ADD THE NUMBERS GAME</h2>
          <div className="equation">
            <p className="text">{`${this.state.number1} + ${this.state.number2} + ${this.state.number3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button name='True' onClick={this.handleClick}>True</button>
          <button name='False' onClick={this.handleClick}>False</button>
          <p className="text">
            You have answered {this.state.numCorrect} question answered correctly out of total {this.state.numQuestions} questions.
          </p>
        </div>
      </div>
    );
  }
}

export default App;

