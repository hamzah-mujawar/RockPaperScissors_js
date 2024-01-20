const choices = ["rock", "paper", "scissors"];

const buttons = document.querySelectorAll("button");

let rounds = 5;

function getRandomInt(max) {
  return Math.floor(Math.random() * max); //Generates random numbers from 0 to max - 1
}

function getComputerChoice() {
  return getRandomInt(3);
}

/*
Assumption for truth table: rock = 0, paper = 1, scissors = 2.

The logic for the truth table is as follows: The difference between the player choice and the computer choice is as follows: -2(player choice is negative 2 less than computer choice) -1(player choice is negative 1 less than computer choice) 0(Draw Conditions) 1(player choice is positive 1 more than computer choice) 2(player choice is positive 2 more than computer choice).
-2 | -1 | 0 | +1 | +2
 W |  L | D |  W |  L         
Based on the above differences a truth table can be generated: -2 is win, -1 lose, 0 is draw, 1 is win, 2 is lose.
*/

const truthTable = ["Draw", true, false]; //This is half the truth table we get the other half by taking the boolean values and reversing them if the difference is negative

function playRound(playerSelection, computerSelection) {
  const mapPlayerSelection = choices.indexOf(playerSelection); //convert playerselection to array choices for truth table conditions
  const difference = mapPlayerSelection - computerSelection;
  const negative = Math.sign(difference); //check if the difference is negative
  const absoluteDifference = Math.abs(difference);
  let mapToTruthTable = truthTable[absoluteDifference];
  if (negative < 0) {
    //if it's negative flip it to get the negative half of the truth table (where the differences are negative)
    return !mapToTruthTable;
  }
  return mapToTruthTable;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(playRound(button.id, getComputerChoice()));
    round--;
  });
});
