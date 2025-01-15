//Function for computer picking
let computerChoice; //Create variable for computer's choice
function getComputerChoice() {
  let rng = Math.round(Math.random() * 100); //An RNG variable, multiply by 100 because Math.random is 0 to <1
  console.log(rng); //See what number is generated and give computerChoice a string value depending on number
  if (rng >= 0 && rng <= 33) {
    return (computerChoice = "rock");
  }
  if (rng >= 34 && rng <= 66) {
    return (computerChoice = "paper");
  }
  if (rng >= 67 && rng <= 100) {
    return (computerChoice = "scissors");
  }
}

//Function for user picking
let humanChoice;
function getHumanChoice() {
  let valid = 0;
  while (valid < 1) {
    humanChoice = prompt("rock, paper, or scissors?");
    if (humanChoice.toLowerCase() === "rock") {
      return (humanChoice = "rock");
    } else if (humanChoice.toLowerCase() === "paper") {
      return (humanChoice = "paper");
    } else if (humanChoice.toLowerCase() === "scissors") {
      return (humanChoice = "scissors");
    } else {
      console.log("Invalid choice, try again");
    }
  }
}

const results = document.querySelector("#results");
const battle = document.createElement("div");
const content = document.createElement("div");

//Scoring
let humanScore = 0;
let computerScore = 0;
function getScores() {
  content.classList.add("content");
  content.textContent = "The score is: ";
  results.appendChild(content);

  const playerScore = document.createElement("p");
  content.classList.add("playerScore");
  playerScore.textContent = "Your score: " + humanScore;
  content.appendChild(playerScore);

  const cpuScore = document.createElement("p");
  content.classList.add("cpuScore");
  cpuScore.textContent = "Computer Score: " + computerScore;
  content.appendChild(cpuScore);
}

function clearScores() {
  content.remove();
}

const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", () => {
  clearScores();
});

//Play a round
function playRound(humanChoice, computerChoice) {
  battle.classList.add("battle");
  battle.textContent = "The following choices were made: ";
  results.appendChild(battle);

  const playerChoice = document.createElement("p");
  battle.classList.add("playerChoice");
  playerChoice.textContent = "You have chosen " + humanChoice;
  battle.appendChild(playerChoice);

  const cpuChoice = document.createElement("p");
  battle.classList.add("cpuChoice");
  cpuChoice.textContent = "Computer has chosen " + computerChoice;
  battle.appendChild(cpuChoice);

  const battleResult = document.createElement("p");
  battle.classList.add("battleResult");
  if (humanChoice === computerChoice) {
    battleResult.textContent = "It's a tie!";
  }
  if (humanChoice === "rock" && computerChoice === "paper") {
    battleResult.textContent = "You lose!";
    computerScore++;
  }
  if (humanChoice === "rock" && computerChoice === "scissors") {
    battleResult.textContent = "You win!";
    humanScore++;
  }
  if (humanChoice === "paper" && computerChoice === "rock") {
    battleResult.textContent = "You win!";
    humanScore++;
  }
  if (humanChoice === "paper" && computerChoice === "scissors") {
    battleResult.textContent = "You lose!";
    computerScore++;
  }
  if (humanChoice === "scissors" && computerChoice === "rock") {
    battleResult.textContent = "You lose!";
    computerScore++;
  }
  if (humanChoice === "scissors" && computerChoice === "paper") {
    battleResult.textContent = "You win!";
    humanScore++;
  }
  battle.appendChild(battleResult);
  getScores();
}

const rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

const scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

// //Function to play the game
// function playGame() {
//   let counter = 0; //Initialize counter to 0
//   while (counter < 5) {
//     //Breaks loop once game is played 5 times
//     getComputerChoice();
//     getHumanChoice();
//     playRound(humanChoice, computerChoice);
//     counter++;
//   }
//   console.log("Thanks for playing!");
// }

// playGame();
