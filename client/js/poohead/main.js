import { Card, Deck } from './cardDeck.mjs';

let pooheadCards = new Deck();
console.log(pooheadCards.cards);
// let cardsExclude = [new Card("Diamonds", "3"), new Card("Hearts", "3")];
pooheadCards.removeCard(new Card("Diamonds", "3"));
pooheadCards.removeCard(new Card("Diamonds", "3"));
console.log(pooheadCards.cards);


// Later cards will be randomly spun when added to the deck, this simulates it after a few cards have been played
let playedCards = Array.from(document.getElementById('playedStack').children);
playedCards.forEach((item, i) => {
    item.style.transform = `rotate(${Math.floor(Math.random() * 180)}deg)`;
    // translate3d(${Math.floor(Math.random() * 2)}rem, ${Math.floor(Math.random() * 2)}rem, z);
});
