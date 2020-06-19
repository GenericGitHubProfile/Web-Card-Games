'use strict';
import { Card } from '../common/card.mjs';
import { Deck } from '../common/cardDeck.mjs';
import { PooheadHand } from './pooheadHand.mjs';

let pooheadDeck = new Deck();
console.log(pooheadDeck.cards);
console.log(pooheadDeck.drawCard());

// Later cards will be randomly spun when added to the deck, this simulates it after a few cards have been played
let playedCards = Array.from(document.getElementById('playedStack').children);
playedCards.forEach((item, i) => {
    item.style.transform = `rotate(${Math.floor(Math.random() * 180)}deg)`;
});

let drawCard = document.getElementById('drawCard');
drawCard.addEventListener('click', (e) => {
    let newCard = pooheadDeck.drawCard();
    console.log(newCard);
    console.log(pooheadDeck.cards);
});

let resetDeck = document.getElementById('resetDeck');
resetDeck.addEventListener('click', (e) => {
    pooheadDeck.resetDeckAndShuffle();
    console.log(pooheadDeck.deckLength());
});

let start = document.getElementById('start');
start.addEventListener('click', (e) => startGame());

function startGame() {
    pooheadDeck.resetDeckAndShuffle();
    let noPlayers = document.getElementById('noPlayers').value;
    const NO_PLAYERS = ((!noPlayers || noPlayers <= 1) ? 2 : noPlayers);

    let players = [];
    for (let i=0; i<NO_PLAYERS; i++) {
        players.push(new PooheadHand());
    }

    players.forEach((item, i) => {
        item.addCardsToHidden(pooheadDeck);
        console.log('Hidden Added: ');
        console.log(item);
        item.addCardsToShown(pooheadDeck);
        console.log('Shown Added: ');
        console.log(item);
        for(let i=0; i<3; i++) {
            item.addCardToPersonal(pooheadDeck.drawCard());
        }
        console.log(`Personal Added: ${item.personal}`);
        console.log(item);
    });
}
