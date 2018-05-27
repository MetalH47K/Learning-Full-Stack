let moonPhase = 'full'.toLowerCase();
let isFoggyNight = false;
let moonPhaseSwitch = moonPhase

function foggyNight() { if (!isFoggyNight) {
  return 'the night is not foggy'
} else {
  return 'the night is foggy'
}}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

console.log('The current moon phase is: ' + toTitleCase(moonPhase) + ' and ' + foggyNight() + '.')

if (moonPhase === 'full' && isFoggyNight === true) {
  console.log('Howl!')
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier')}
	else if (moonPhase === 'mostly new') {
    console.log('Back on two feet.')
  }
	else if (moonPhase === 'full' && !isFoggyNight) {
    console.log('The moon is shining but the night is not foggy.')
  }
  else {
  console.log('Invalid moon phase')
}

switch (moonPhaseSwitch) {
  case 'full':
    console.log('Howl!!! I\'ve turnt!');
    break;
  case 'mostly full':
    console.log('Time to whip out the razor!');
    break;
  case 'mostly new':
    console.log('I feel... ... Human...');
    break;
  default:
    console.log('Please log a correct Moon Phase...');
    break;
    }