let person = {
  name: 'Tyron',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: "Alarm set to 7AM"
};

console.log(person['name'])
console.log(person['age'])
console.log("User's name is " + person.name + ' and he is ' + person.age + ' years old.')

let day = 'Wednesday'
let alarm = ''

if (day === 'Saturday' || day === 'Sunday') {
  alarm = 'weekendAlarm'
} else {
  alarm = 'weekAlarm'
}

console.log(person[alarm])

let person = {
  _name: 'Lu Xun',
  _age: 137,
  
  set age(ageIn) {
    if (typeof ageIn === 'number') {
      this._age = ageIn;
      console.log('Age Updated!')
    }
    else {
      console.log('Invalid input');
      return 'Invalid input';
    }
  },
	get age() {
    return `${this._name} is ${this._age} years old`
  }
};

person.age = 39

console.log(person.age)