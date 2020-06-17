import { Deck } from './cardDeck.mjs';

let pooheadCards = new Deck();
console.log(pooheadCards.cards);
pooheadCards.removeCard({"suit": "Diamonds", "value": "3"});
pooheadCards.removeCard({"suit": "Hearts", "value": "3"});
pooheadCards.removeCard({"suit": "Clubs", "value": "4"});
pooheadCards.removeCard({"suit": "Spades", "value": "Ace"});
console.log(pooheadCards.cards);


// Later cards will be randomly spun when added to the deck, this simulates it after a few cards have been played
let playedCards = Array.from(document.getElementById('playedStack').children);
playedCards.forEach((item, i) => {
    item.style.transform = `rotate(${Math.floor(Math.random() * 180)}deg)`;
});
