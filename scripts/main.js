const choices = ["rock", "paper", "scissors"];

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
  playerSelection = playerSelection.toLowerCase(); //convert playerSelection into lowercase
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

function game() {
  let roundCounter = 5; //best of five game
  let roundResult = 0; //variable to hold the result of one round using playRound function
  let computerSelection = 0;
  let playerSelection = "";
  let computerScore = 0,
    playerScore = 0;

  while (roundCounter > 0) {
    playerSelection = prompt("Rock, Paper or Scissors?: ");
    computerSelection = getComputerChoice();
    roundResult = playRound(playerSelection, computerSelection);
    console.log(`Round ${roundCounter} Start! \n`);
    if (roundResult === true) {
      roundCounter--;
      playerScore++;
      console.log(
        `You win! ${playerSelection} beats ${choices[computerSelection]}`,
      );
    } else if (roundResult === false) {
      roundCounter--;
      computerScore++;
      console.log(
        `You lose! ${playerSelection} loses against ${choices[computerSelection]}`,
      );
    } else {
      //don't decrement round counter to make them replay the round
      console.log(`Draw ${playerSelection} == ${choices[computerSelection]}`);
    }
  }
  console.log(
    `-------------------------------------- Game Complete -------------------------------------`,
  );
  //logic to determine who won the game
  computerScore > playerScore
    ? console.log(
        `Computer wins(${computerScore}), Your Score is: ${playerScore}`,
      )
    : computerScore === playerScore
      ? console.log(
          `Draw! Computer Score is: ${computerScore} Your Score is: ${playerScore}`,
        )
      : console.log(
          `You win! Your Score is: ${playerScore} Computer Score is: ${computerScore}`,
        );
}

game(); //function call for game();
