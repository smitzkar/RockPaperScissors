// Rock Paper Scissors

// Holy shit, what a shit show! 
// Changing global values within functions, instead of using return values.


/* 
# Update 21.06. 
- [ ] replace current functionality via prompt with buttons
- [ ] replace console output of result with text  
*/ 

function scriptTest() {
  console.log("Script loaded.");
}

// temporary global variable
let player = 0;
let computer = 0;
let winner;

// Get user choice (replaces playerChoice() )

// declare some variables for later use (kind of pointless, tbh)
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

// on button click, set player choice 
rock.addEventListener("click", () => {player = 0; console.log(player)});
paper.addEventListener("click", () => {player = 1; console.log(player)});
scissors.addEventListener("click", () => {player = 2; console.log(player)});






// Return randomInt from 0-max
// function getRandInt(max) {
//   return Math.floor(Math.random()*max);
// }
// rewrite as arrow function  
const getRandInt = (max) => Math.floor(Math.random()*max);

// Generate computer choice -> rng
function computerAnswer() {
  // temporary solution
  computer = getRandInt(3);
  return computer;
}

// Compare player vs computer choice, return answer -> case
function compareResults(player, computer){

  // console.log(player);
  // console.log(computer);

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
    
    case player < computer:
      console.log("Computer wins!");

  }
  
}


// Return winner -> using case variable from above


// Main function to start the game
function gameStart(){
  let playerChoice = playerAnswer();
  console.log(`You chose: `, playerChoice)
  console.log("Computer is working...");

  compareResults(playerChoice, computerAnswer());
}

