import React, {useState} from 'react';
import './App.css'
import rocklogo from './assets/rps-white.png';
import PlayerName from './components/PlayerName';
import Rock from './components/Rock'
import Paper from './components/Paper'
import Scissors from './components/Scissors'
// import {FaHandRock, FaHandPaper, FaHandScissors} from "react-icons/fa"

function App() {


  // icon size for all actions
  const size = {
    icon: 95
  }

  //win lose message 
  const messages = {
    win: "You Win 🎉",
    lose: "You Lost 😢",
    draw: "Draw"
  }
  //state for player and computer
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);

  const[playerScore, setPlayerScore] = useState(0);
  const[computerScore, setComputerScore] = useState(0);

  

  const updateChoice = (newPlayerChoice) => {
    if (newPlayerChoice == null) {
      setPlayerScore(0)
      setComputerScore(0)
    } else {
    setPlayerChoice(newPlayerChoice)
    // Generate a random computer choice (rock, paper, or scissors)
    const randomIndex = Math.floor(Math.random() * 3);
    const choices = ["Rock", "Paper", "Scissors"];
    const newChoice = choices[randomIndex]
    setComputerChoice(newChoice);
    const result = checkWinner(newPlayerChoice, newChoice)

    if (result == messages.win) {
      setPlayerScore(playerScore + 1) 
    } else if (result == messages.lose) {
      setComputerScore(computerScore + 1) 
    }
  }
  };


  const checkWinner = (playerChoice, computerChoice) => {
    let result = ""


      if (playerChoice == null && computerChoice == null) {
        result = ""
    } else if (playerChoice == computerChoice){
        result = messages.draw
    } else if (playerChoice == "Paper" && computerChoice == "Rock"){
      result = messages.win
    } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
      result = messages.win
    } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
      result = messages.win
    } else {
      result = messages.lose
    }
    return result 
  }


  
  const result = checkWinner(playerChoice, computerChoice)


  const[playerName, setPlayerName] = useState(null);

  const updateName = (event) => {
    setPlayerName(event.target.value);
  }


  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };






  return (
    <div className="App">
      <header className="App-header">
        <h1 class="title">Rock - Paper - Scissors</h1>
        <img src={rocklogo} alt="rock-paper-scissors" width="200px"/>
      </header>
      <div class="result"> 
    <h1 class="result">{result}</h1>
  </div>
      <div className="game-container">
      <label htmlFor="playerName">
        <input placeholder="Enter a nickname..." class="general-button" id="playerName" type="text" value={playerName} onChange={updateName} />
      </label>
      {/* <button class="general-button" onClick={handleSubmit}></button> */}

      <PlayerName name={playerName}/>
      
      <br></br>
      <Rock choice={() => updateChoice("Rock")} size={size.icon} />
      <Paper choice={() => updateChoice("Paper")} size={size.icon}/>
      <Scissors choice={() => updateChoice("Scissors")} size={size.icon}/>
      <hr></hr>
      <table class="chosen-table">
      <tr>
          <th>You have chosen</th>
          <th>Computer has chosen</th>
      </tr>
      <tr>
      <td>{playerChoice}</td>
      <td>{computerChoice}</td>
      </tr>
  </table>
      <hr></hr>

      <div className="scoreboard">

      <h2>Scoreboard</h2>
      <table class="score-table">
          <tr>
              <th class="score-th">Player</th>
              <th class="score-th">Computer</th>
          </tr>
          <tr>
              <td class="score-td">{playerScore}</td> 
              <td class="score-td">{computerScore}</td> 
          </tr>
      </table>
      <br></br>
      <button class="general-button" onClick={() => updateChoice(null)}>RESTART</button>
      {/* <button onClick={location.reload}>REFRESH</button> */}
      </div>

    </div>
    </div>
    );

  };


export default App;
// export default App;





// const[playerName, setPlayerName] = useState('');

// const updateName = (name) => {
//   setPlayerName(<input name={name} />)
// }


// <PlayerName name={playerName}/>