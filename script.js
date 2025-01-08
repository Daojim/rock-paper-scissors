function getComputerChoice() {
  let computerChoice;
  let rng = Math.round(Math.random() * 100);
  console.log(rng);
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
