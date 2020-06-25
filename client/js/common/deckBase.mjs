import { Card } from './card.mjs';

export class DeckBase {
    constructor() {
        this.cards = [];
        this._suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
        this._cardValue = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
    }

    /*
    * Removes a given card
    */
    removeCard(card = null) {
        if(!this._cardValue.includes(card.value) || !this._suits.includes(card.suit)) return false;
        let cardIndex = this.findCard(card);
        return ((cardIndex >= 0) ? this.cards.splice(cardIndex, 1) : false);
    }

    /*
    * Finds a given card
    */
    findCard(card = null) {
        if(!this._cardValue.includes(card.value) || !this._suits.includes(card.suit)) return false;
        return this.cards.findIndex((item) => item.suit === card.suit && item.value === card.value);
    }

    /*
    * Gives the length of the deck
    */
    deckLength() {
        return this.cards.length;
    }
};
