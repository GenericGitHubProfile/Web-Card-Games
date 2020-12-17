import { DeckBase } from './deckBase.mjs';
import { Card } from './card.mjs';

/*
* Deck of cards, 4 suits, 13 cards per suit
*/
export class Deck extends DeckBase {
    /*
    * initialise Deck
    */
    constructor() {
        super();
        // console.log(this);
        // Populates the initial Deck
        this.resetDeckAndShuffle();
        // this.resetDeck();
    }

    /*
    * pops card array, allows for use of card
    * (Neccessary?)
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
    */
    resetDeck() {
        let fullDeck = new Array();
        Object.values(this._suits).forEach((suit, i) => {
            Object.values(this._cardValue).forEach((value, j) => {
                fullDeck.push(new Card(suit, value));
            });
        });
        this.cards = fullDeck;
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
        let mostlyFullDeck = new Array();
        console.log(excludeArr);
        Object.values(this._suits).forEach((suit, i) => {
            Object.values(this._cardValue).forEach((value, j) => {
                let newCard = new Card(suit, value);
                if (!excludeArr.some((e) => (e.suit === item && e.value === el))) {
                    mostlyFullDeck.push(newCard);
                }
            });
        });
        this.cards = mostlyFullDeck;
    }

    /*
    * Resets the deck, excluding the given array of cards and then shuffles
    */
    resetDeckExcludeShuffle(excludeArr = []) {
        this.resetDeckWithoutCards(excludeArr);
        this.shuffleDeck();
    }
};
