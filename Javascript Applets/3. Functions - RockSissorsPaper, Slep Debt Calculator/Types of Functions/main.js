// Function Declaration
function isGreaterThanUnrefactored(numberOne, numberTwo){
  if(numberOne > numberTwo){
    return true;
  } else {
    return false;
  }
}

//Function Expression in Arrow Function
const isGreaterThan = (numberOne, numberTwo) => {
  if(numberOne > numberTwo){
    return true;
  } else {
    return false;
  }
}

console.log(isGreaterThan(4, 8))
console.log(isGreaterThanUnrefactored(4, 8))


/* Below is refactored as the following:

You'll notice:

The parentheses around celsius have been removed, since it is a single parameter.
The return keyword has been removed since the function consists of a single-line block.
The {} have been removed, again, since the function consists of a single-line block.

*/

// Original Code:

const volumeOfSphere = (diameter) => {
  return (1/6) * Math.PI * diameter * diameter * diameter;
};

console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');


// Refactored Code
const volumeOfSphere = diameter => (1/6) * Math.PI * diameter * diameter * diameter;

console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');