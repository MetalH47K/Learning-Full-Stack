let isLocked = false;
let isCorrect = true;
let favoritePhrase = 'Love That!';

if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}

if (isCorrect) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}

if (favoritePhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}

// Above is the original code.

// Below is the refactored code using the declared variables above.

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");