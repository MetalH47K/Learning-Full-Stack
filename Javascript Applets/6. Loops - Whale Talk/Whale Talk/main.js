let input = "turpentine and turtles";
let vowels = ['a' ,'e', 'i', 'o', 'u'];
let resultArray = [];

for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  if (input[inputIndex] === 'e') {
    resultArray.push(input[inputIndex])
  }
  else if (input[inputIndex] === 'u') {
    resultArray.push(input[inputIndex])
  }
  for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {
    if (input[inputIndex] === vowels[vowelIndex]) {
      resultArray.push(vowels[vowelIndex])
    }
  }
}

console.log(resultArray.join('').toUpperCase())
console.log('UUEEIEEAUUEE') //Cross Reference Check