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

//Scoring
let humanScore = 0;
let computerScore = 0;
function getScores() {
  console.log("The score is: ");
  console.log("Your score: " + humanScore);
  console.log("Computer Score: " + computerScore);
}

//Play a round
function playRound(humanChoice, computerChoice) {
  console.log(humanChoice);
  console.log(computerChoice);
  if (humanChoice === computerChoice) {
    console.log("It's a tie");
  }
  if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose!");
    computerScore++;
  }
  if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win!");
    humanScore++;
  }
  if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win!");
    humanScore++;
  }
  if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose!");
    computerScore++;
  }
  if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose!");
    computerScore++;
  }
  if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win!");
    humanScore++;
  }
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
