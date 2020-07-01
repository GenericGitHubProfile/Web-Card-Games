import { Card } from './card.mjs'
import { DeckBase } from './deckBase.mjs';

export class PlayerHand extends DeckBase {
    constructor(playerID = null) {
        super();
        if(Number.isInteger(playerID)) {
            this.playerID = playerID;
        } else {
            throw new TypeError("PlayerID must be an integer");
        }
        // this.playerID = ((Number.isInteger(playerID)) ? playerID : new TypeError("PlayerID must be an integer"));
    }

    /*
    * Adds a card to the player's hand, Must give an object matching the qualities of a Card
    */
    addCardToDeck(card) {
        if(!this._cardValue.includes(card.value) || !this._suits.includes(card.suit)) return false;
        this.cards.push(card);
    }

    /*
    * Adds an array of cards to the deck, must all be objects matching the qualities of a Card 
    */
    addStackToDeck(cardArr) {
        if(!cardArr.some((card) => !(this._cardValue.includes(card.value) || this._suits.includes(card.suit)))) return false;
        this.cards = cardArr.concat(this.cards);
    }
};
