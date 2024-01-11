function getRandomInt(max) {
  return Math.floor(Math.random() * max); //Generates random numbers from 0 to max - 1
}

function getComputerChoice() {
  const computerChoices = ["rock", "paper", "scissors"];
  return computerChoices[getRandomInt(3)];
}

console.log(getComputerChoice());
