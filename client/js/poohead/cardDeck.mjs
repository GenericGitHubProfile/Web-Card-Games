export class Deck {
    /*
    * initialise Deck
    */
    constructor() {
        this.cards = [];
        this._suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
        this._cardBase = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
        this.resetDeck();
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
            this._cardBase.forEach((el, j) => {
                this.cards.push({"suit": item, "value": el});
            });
        });
        this.shuffleDeck();
    }

    /*
    * Removes a given card
    * OPTIMIZE: Make it so that a list is given and those specific cards are not entered
    * rather than having a function to remove them after the full list is created
    */
    removeCard(card) {
        console.log(card);
        this.cards.filter((item) => item === card);
        // const INDEX = this.cards.indexOf(card);
        // if(INDEX > -1) {
        //     this.cards.splice(INDEX, 1);
        // }
    }
}
