// Rock Paper Scissors

function scriptTest() {
  console.log("Script loaded.");
}

// Take player choice and validate
function playerAnswer() {

  const possibleInput = ["rock", "paper", "scissors"];
  let playerHand; 
  let validated = false;

  // Loop asking player for input until valid answer
  while (validated == false) {
    playerHand = prompt("Please choose from rock, paper or scissors.");
    if (possibleInput.includes(playerHand)) {
      validated = true;
    }
  }
  return playerHand;
}

// Return randomInt from 0-max
function getRandInt(max) {
  return Math.floor(Math.random()*max);
}

// Generate computer choice -> rng
function computerAnswer() {
  return getRandInt(3);

}

// Compare player vs computer choice, return answer -> case

// Return winner -> using case variable from above


// Main function to start the game
function gameStart(){
  let playerChoice = playerAnswer();
  console.log(`You chose: `, playerChoice)
  console.log("Computer is working...");
}

