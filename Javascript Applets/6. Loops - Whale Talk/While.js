let cards = ['Spades', 'Heart', 'Club', 'Diamond'];

let currentCard = 'Hearts'

while (currentCard !== 'Spade') {
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() * 4)];
}

console.log('found a Spade!')