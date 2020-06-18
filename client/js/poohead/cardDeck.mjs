/*
* Single card, has a suit and a value
*/
export class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}

/*
* Deck of cards, 4 suits, 13 cards per suit
*/
export class Deck {
    /*
    * initialise Deck
    */
    constructor() {
        this.cards = [];
        this._suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
        this._cardValue = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
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
            this._cardValue.forEach((el, j) => {
                this.cards.push(new Card(item, el));
            });
        });
        // this.shuffleDeck();
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
        this.shuffleDeck();
    }

    /*
    * Removes a given card
    */
    removeCard(card = null) {
        if(!this._cardValue.includes(card.value) || !this._suits.includes(card.suit)) return false;
        // this.cards.splice(this.findCard(card), 1);
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
};
