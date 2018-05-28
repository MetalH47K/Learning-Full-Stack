const getSleepHours = function (day) {
  switch (day) {
    case 'monday':
      return 5
      break;
    case 'tuesday':
      return 6
      break;
    case 'wednesday':
      return 8
      break
    case 'thursday':
      return 4
      break
    case 'friday':
      return 5
      break;
    case 'saturday':
      return 6
      break;
    case 'sunday':
      return 7
      break    
  }
}

const getActualSleepHours = () => {
return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')};

const getIdealSleepHours = (hours) => {
  return hours * 7
}


console.log('Sleep accumalated last week = ' + getActualSleepHours())
console.log('... Sleep Goal: ' + getIdealSleepHours(8))

const calculateSleepDebt = function () {
  let actualSleepHours = getActualSleepHours()
  let idealSleepHours = getIdealSleepHours(8)
  let sleepDefecit = idealSleepHours - actualSleepHours;
  let sleepSlurplus = actualSleepHours - idealSleepHours;
  if (actualSleepHours === idealSleepHours) {
    console.log('Perfect Sleep Week')}
  else if (actualSleepHours < idealSleepHours) {
    console.log('Oh no! Your are not getting enough sleep!! You need ' + sleepDefecit + ' more hours to catch up.')}
  else if (actualSleepHours > idealSleepHours) {
    console.log('Too much sleep never hurt anyone right??? You slept for an extra ' + sleepSlurplus + ' hours')}}

calculateSleepDebt()