let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(" ");

console.log(storyWords.length);

let overusedWordsIndex = betterWords.filter(word => OverusedWords.includes(word));

  let reallyCount = 0;
  let veryCount = 0;
  let basicallyCount = 0;

for (let repetition = 0; repetition <= overusedWordsIndex.length; repetition++) {
  if (overusedWordsIndex[repetition] === overusedWords[0]) {
    reallyCount++;
  }else if (overusedWordsIndex[repetition] === overusedWords[1]) {
    veryCount++;
  }else {
    basicallyCount++;
  }
};

console.log(betterWords.join(' '));
console.log('There are ' + overusedWordsIndex.length + ' overused words: ' + overusedWordsIndex.join(' '));
console.log(`Really appears ${reallyCount} times.`);
console.log(`Very appears ${veryCount} times.`);
console.log(`Basically appears ${basicallyCount} times.`);


// NEW LEARNING BELOW
let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', ' ', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

/* 
let secretMessage = animals.map(function(animals) {
  return animals[0]
})
*/

let secretMessage = animals.map(animals => animals[0])

console.log(secretMessage.join(''));

let bigNumbers = [100, 200, 300, 400, 500];

/* 
let smallNumbers = bigNumbers.map(function(numbers) {
  return numbers / 100
})
*/

let smallNumbers = bigNumbers.map(numbers => numbers / 100)

// Different Codes:
let cities = ['Nashville', 'Charlotte', 'Asheville', 'Austin', 'Boulder'];

let nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
let longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a new array
let smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);
