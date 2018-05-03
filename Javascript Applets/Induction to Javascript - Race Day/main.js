let raceNumber = Math.floor(Math.random() * 1000);
let earlyTime = false
let runnerAge = 18

if (runnerAge > 18 && earlyTime === true) {
  raceNumber += 1000 };

if (runnerAge > 18 && earlyTime === true) {
  console.log('Your start time will be 9:30 AM');
}
else if (runnerAge > 18 && earlyTime === false) {
  	console.log('Your start time will be 11:00 AM');
}

if (runnerAge < 18) {
  console.log('Your start time will be 12:30 AM');
}

console.log('Your race number is: ' + raceNumber)

if (runnerAge === 18) {
  console.log('Your age is 18. Please see the desk.');
}