// Rock Paper Scissors

function scriptTest() {
  console.log("Script loaded.");
}

// Take player choice and validate
function playerInput() {

  const possibleInput = ["rock", "paper", "scissors"];
  let validated = false;

  while (validated == false) {
    let tempVar = prompt("Please choose from rock, paper or scissors.");
    // if (!possibleInput.includes(tempVar)) {
    // }
    else {
      validated = true;
    }
  }
}

// Main function to start the game
function gameStart(){
  let playerChoice = playerInput();
  console.log("Computer is working...");
}