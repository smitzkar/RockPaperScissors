// Rock Paper Scissors

function scriptTest() {
  console.log("Script loaded.");
}

function playerInput() {
  console.log("Choose between rock/paper/scissors.\n Alternatively enter 1, 2, 3.");
  let tempVar = prompt("Rock, paper or scissors?");
  const possibleInput = ["rock", "paper", "scissors"];
  if (!possibleInput.includes(tempVar)) {
    console.log("Please enter 'rock', 'paper' or 'scissors'!");
  }
}

function gameStart(){
  let playerChoice = playerInput();
}