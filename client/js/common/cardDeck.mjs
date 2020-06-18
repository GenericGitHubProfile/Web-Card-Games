import { Card } from './card.mjs';
import { DeckBase } from './deckBase.mjs';
/*
* Deck of cards, 4 suits, 13 cards per suit
*/
export class Deck extends DeckBase {
    /*
    * initialise Deck
    */
    constructor() {
        super();
        // Populates the initial Deck
        this.resetDeckAndShuffle();
    }

    /*
    * pops card array, allows for use of card
    */
    drawCard() {
        return ((this.cards.length > 0) ? this.cards.pop() : false);
    }

    /*
    * Re-organises the currently available cards in the deck
    */
    shuffleDeck() {
        this.cards.forEach((item, i) => {
            const RANDOMINDEX = Math.floor(Math.random() * this.cards.length);
            [this.cards[i], this.cards[RANDOMINDEX]] = [this.cards[RANDOMINDEX], this.cards[i]];
        });
    }

    /*
    * Resets the deck to the original 52
    * CHANGE: have an array parameter, with default being empty array for cards to exclude?
    */
    resetDeck() {
        this.cards = [];
        this._suits.forEach((item, i) => {
            this._cardValue.forEach((el, j) => {
                this.cards.push(new Card(item, el));
            });
        });
    }

    /*
    * Resets the deck and then shuffles
    */
    resetDeckAndShuffle() {
        this.resetDeck();
        this.shuffleDeck();
    }

    /*
    * Resets the Deck while excluding the cards in the array
    */
    resetDeckWithoutCards(excludeArr = []) {
        // Assume the excludeArr only contains Card objects
        this.cards = [];
        console.log(excludeArr);
        this._suits.forEach((item, i) => {
            this._cardValue.forEach((el, j) => {
                let newCard = new Card(item, el);
                if (!excludeArr.some((e) => (e.suit === item && e.value === el))) {
                    this.cards.push(newCard);
                }
            });
        });
    }

    /*
    * Resets the deck, excluding the given array of cards and then shuffles
    */
    resetDeckExcludeShuffle(excludeArr = []) {
        this.resetDeckWithoutCards(excludeArr);
        this.shuffleDeck();
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

    deckLength() {
        return this.cards.length;
    }
};
