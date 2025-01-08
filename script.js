//Function for computer picking
function getComputerChoice() {
  let computerChoice; //Create variable for computer's choice
  let rng = Math.round(Math.random() * 100); //An RNG variable, multiply by 100 because Math.random is 0 to <1
  console.log(rng); //See what number is generated and give computerChoice a string value depending on number
  if (rng >= 0 && rng <= 33) {
    computerChoice = "rock";
  }
  if (rng >= 34 && rng <= 66) {
    computerChoice = "paper";
  }
  if (rng >= 67 && rng <= 100) {
    computerChoice = "scissors";
  }
  console.log(computerChoice);
}

getComputerChoice();

//Function for user picking
function getHumanChoice() {
  let valid = 0;
  let humanChoice;
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
