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

getComputerChoice();
console.log(computerChoice);

//Function for user picking
let humanChoice;
function getHumanChoice() {
  let valid = 0;
  while (valid < 1) {
    humanChoice = prompt("rock, paper, or scissors?");
    if (
      humanChoice.toLowerCase() === "rock" ||
      humanChoice.toLowerCase() === "paper" ||
      humanChoice.toLowerCase() === "scissors"
    ) {
      valid = 1;
    } else {
      console.log("Invalid choice, try again");
    }
  }
  console.log(humanChoice);
}

getHumanChoice();
console.log(getComputerChoice.computerChoice);

//Scoring
let humanScore = 0;
let computerScore = 0;

//Play a round
function playRound(humanChoice, computerChoice) {
  console.log(humanChoice);
}
