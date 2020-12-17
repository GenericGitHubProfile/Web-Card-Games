import { Card } from './card.mjs';

export class DeckBase {
    constructor() {
        this.cards = new Array();
        // Suits and Values are enumerators, as they only have a finite set of specific values they can exhibit
        this._suits = Object.freeze({CLUBS: 'Clubs', DIAMONDS: 'Diamonds', HEARTS: 'Hearts', SPADES: 'Spades'});
        this._cardValue = Object.freeze({ACE: 'Ace',TWO: '2',THREE: '3',FOUR: '4',FIVE: '5',SIX: '6',SEVEN: '7',EIGHT: '8',NINE: '9',TEN: '10',JACK: 'Jack',QUEEN: 'Queen',KING: 'King'});
    }

    /*
    * Removes a given card
    */
    removeCard(card = null) {
        if(!this._cardValue.hasOwnProperty(card.value) || !this._suits.hasOwnProperty(card.suit)) return false;
        let cardIndex = this.findCard(card);
        return ((cardIndex >= 0) ? this.cards.splice(cardIndex, 1) : false);
    }

    /*
    * Finds a given card
    */
    findCard(card = null) {
        if(!this._cardValue.hasOwnProperty(card.value) || !this._suits.hasOwnProperty(card.suit)) return false;
        return this.cards.findIndex((item) => item.suit === card.suit && item.value === card.value);
    }

    /*
    * Gives the length of the deck
    */
    deckLength() {
        return this.cards.length;
    }
};
