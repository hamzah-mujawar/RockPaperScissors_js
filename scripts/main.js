const choices = ["rock", "paper", "scissors"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max); //Generates random numbers from 0 to max - 1
}

function getComputerChoice() {
  return getRandomInt(3);
}

const playerSelection = "scissors";
const computerSelection = getComputerChoice();
/*
Assumption for truth table: rock = 0, paper = 1, scissors = 2.
The logic for the truth table is as follows: The difference between the player choice and the computer choice is as follows: -2 -1 0(Draw Conditions) 1(player choice) 2
*/
const truthTable = ["Draw", true, false];

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase(); //convert playerSelection into lowercase
  const mapPlayerSelection = choices.indexOf(playerSelection);
  const difference = mapPlayerSelection - computerSelection;
  const negative = Math.sign(difference);
  const absoluteDifference = Math.abs(difference);
  let mapToTruthTable = truthTable[absoluteDifference];
  if (negative < 0) {
    mapToTruthTable = !mapToTruthTable;
  }
  if (mapToTruthTable === true) {
    return `You win! ${playerSelection} beats ${choices[computerSelection]}`;
  } else if (mapToTruthTable === false) {
    return `You lose! ${playerSelection} loses against ${choices[computerSelection]}`;
  } else {
    return `Draw ${playerSelection} == ${choices[computerSelection]}`;
  }
}

console.log(playRound(playerSelection, computerSelection));
