import { Card } from './card.mjs'
import { DeckBase } from './deckBase.mjs';

export class PlayerHand extends DeckBase {
    constructor() {
        super();
    }

    addCardToDeck(card) {
        if(!this._cardValue.includes(card.value) || !this._suits.includes(card.suit)) return false;
        this.cards.push(card);
    }
};
