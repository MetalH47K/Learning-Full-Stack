const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'sissors')
  {return userInput}
else {console.log('Error!');}
}

function getComputerChoice () {
  randomNumber = Math.floor(Math.random() *3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'sissors';
    }
  return randomNumber
}

//console.log(getComputerChoice())

function determineWinner (userChoice, ComputerChoice) {
  if (userChoice === computerChoice) {
  return 'This game was a Tie!';}
    
  if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
  if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
  if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
}

console.log(determineWinner('paper', 'sissors'));