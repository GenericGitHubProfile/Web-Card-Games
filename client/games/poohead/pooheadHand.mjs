import { PlayerHand } from '../common/playerHand.mjs';
/*
* Player hand structure for Poohead game
* each player has 3 sets of 3 cards, as explained below
*/
export class PooheadHand extends PlayerHand {
    constructor() {
        super();
        this.hidden = [];
        this.shown = [];
        this.personal = [];
    }

    /*
    * Adds cards to hidden personal Deck (cards that no players see)
    * Maximum of three cards
    * Added once at the start of a round
    * Cannot be played until player does not have shown cards
    */
    addCardsToHidden(Deck) {
        for (let i=0; i<3; i++) {
            this.hidden.push(Deck.drawCard());
        }
    }

    drawCardFromHidden(index) {
        // Hidden cards cannot be played while player still has shown cards
        if(this.shown.length > 0) return false;
        //
    }

    /*
    * Adds cards to shown personal Deck (cards that all players see)
    * Maximum of three cards
    * Added once at the start of a round
    * Cannot be played until player does not have personal cards
    */
    addCardsToShown(Deck) {
        for (let i = 0; i < 3; i++) {
            this.shown.push(Deck.drawCard());
        }
    }

    drawCardFromShown(index) {
        // Shown cards cannot be played while the player still has personal cards
        if(this.personal.length > 0) return false;
    }

    /*
    * Adds card to personal Deck (cards that only this player sees)
    * Maximum of three
    * Will be continually added as the game progresses
    * When picking up cards from the main Deck, cards enter this array
    */
    addCardToPersonal(card) {
        if(!this._cardValue.includes(card.value) || !this._suits.includes(card.suit)) return false;
        this.personal.push(card);
    }
};
