/*
const getUserChoice = userInput => {
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'sissors')
  {return userInput}
else {console.log('Invalid Entry Error! Please Retry!');}
}
*/


function getComputerUsersChoice () {
  randomNumber = Math.floor(Math.random() *3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
    }
  return randomNumber
}
 
function getComputerChoice () {
  randomNumber = Math.floor(Math.random() *3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
    }
  return randomNumber
}


console.log('The Computer\'s Choice is: ' + getComputerChoice());
console.log('The User\'s Choice is: ' + getComputerUsersChoice());

console.log('--------------------------------------------------');

function determineWinner (userChoice, computerChoice) {
if (userChoice === computerChoice) {
  return 'This game was a Tie!';}
    
  else if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
  else if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
  else if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
}

function playGame () {
  let userChoice = getComputerChoice()
  let computerChoice = getComputerUsersChoice()
  console.log(determineWinner(userChoice, computerChoice));
}

playGame()
