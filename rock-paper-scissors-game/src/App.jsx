import React, {useState} from 'react';
import './App.css';
import rocklogo from './assets/rock-paper-scissors.png';
import PlayerName from './components/PlayerName';
import Rock from './components/Rock'
import Paper from './components/Paper'
import Scissors from './components/Scissors'



function App() {

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

    if (result == "Win") {
      setPlayerScore(playerScore + 1) 
    } else if (result == "Lose") {
      setComputerScore(computerScore + 1) 
    }
  }
  };

  const checkWinner = (playerChoice, computerChoice) => {
    let result = ""

      if (playerChoice == null && computerChoice == null) {
        result = ""
    } else if (playerChoice == computerChoice){
        result = "Draw"
    } else if (playerChoice == "Paper" && computerChoice == "Rock"){
      result = "Win"
    } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
      result = "Win"
    } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
      result = "Win"
    } else {
      result = "Lose"
    }
    return result 
  }


  
  const result = checkWinner(playerChoice, computerChoice)

  // icon size for all actions
  const size = {
    icon: 40
  }


  return (
    <div className="App">
      <header className="App-header">
      <img src={rocklogo} alt="rock-paper-scissors" width="150px"/>
        <h1>Rock - Paper - Scissors</h1>
      </header>


      <PlayerName name='Player ' />
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
      <div class="result"> 
    <h1>{result}</h1>
  </div>
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
      <button onClick={() => updateChoice(null)}>RESTART</button>
      {/* <button onClick={location.reload}>REFRESH</button> */}

    </div>
    </div>
    );

  };

export default App;
