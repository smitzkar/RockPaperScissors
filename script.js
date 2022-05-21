// Rock Paper Scissors

function scriptTest() {
  console.log("Script loaded.");
}

// temporary global variable
let player;
let computer;
let winner;


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

  // Transform input to integer for comparison
  if (playerHand === "rock"){
    playerHand = 0;
  }
  else if (playerHand === "paper"){
    playerHand = 1;
  }
  else playerHand = 2;
  
  
  // temporary storage
  player = playerHand;

  return playerHand;
}

// Return randomInt from 0-max
function getRandInt(max) {
  return Math.floor(Math.random()*max);
}

// Generate computer choice -> rng
function computerAnswer() {
  // temporary solution
  computer = getRandInt(3);
  return computer;
}

// Compare player vs computer choice, return answer -> case
function compareResults(){
  switch(true){
    default: console.log("Something went wrong!");
    break;

    case player === computer:
      console.log("Draw! Try again.")
      break;

    case player === 0 && computer === 2:
      console.log("Your rock beats my scissors!");
      break;
    
    case player === 2 && computer === 0:
      console.log("My rock beats your scissors!");
      break;
    
    case player > computer:
      console.log("You win.");
      break;
    
    case computer < computer:
      console.log("I win!");

  }
  
}


// Return winner -> using case variable from above


// Main function to start the game
function gameStart(){
  let playerChoice = playerAnswer();
  console.log(`You chose: `, playerChoice)
  console.log("Computer is working...");

  compareResults();
}

