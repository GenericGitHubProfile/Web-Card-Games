import { GameBase } from '../common/gameBase.mjs';
import { SnapHand } from './snapHand.mjs';
import { CardDeck } from '../common/cardDeck.mjs';

export class SnapGame extends GameBase {
    constructor() {
        super("Snap");
        this.MAX_PLAYERS = 5;
        this.MIN_PLAYERS = 2;
        this.setGameState("PRELUDE");
        this.snapDeck = new CardDeck();
    }

    /*
    * Initiates snap game, sets up player hands
    * Distributes cards evenly
    */
    gameStart(noPlayers = 0) {
        // Ensure players are withing the appropriate range
        this.noPlayers = (checkNoPlayers(noPlayers) ? noPlayers : throw new RangeError(`Game Requires between ${MIN_PLAYERS} and ${MAX_PLAYERS} players to operate`));
        // Players are put into a Circularly Linked List so that they can be constantly cycled through
        this.players = new CircularLinkedList();
        for (var i = 0; i < noPlayers; i++) {
            this.players.appendNode(new SnapHand(i));
        }

        // Setup currentPlayers so the linked list can be cycled through
        this.currentPlayer = this.players.head;

        // Add cards to players deck one at a time in a round robin method
        while(this.snapDeck.cards.length !== 0) {
            this.currentPlayer.addCardToDeck(this.snapDeck.cards.pop());
            this.currentPlayer = this.currentPlayer.next;
        }

        // Randomises the player who has their turn first
        for (let i=0; i<Math.floor(Math.random() * (this.players.length)) + 1; i++) {
            this.currentPlayer = this.currentPlayer.next;
        }

        // Updates the game state
        this.setGameState("START");
    }

    /*
    * adds a player's card to the stack
    */
    playCard() {
        // unshift : so we can constantly use stack[0], rather than calculate length each time
        this.stack.unshift(this.currentPlayer.cards.pop());
        // Swap active player to next
        this.currentPlayer = this.currentPlayer.next;
    }

    callSnap(player = null) {
        // Must give a parameter of a player
        if(!player || !(player instanceof SnapHand)) throw new Error("Must have a player to call Snap");
        // If call is correct, give player the entire stack
        if(this.stack[0].value === this.stack[1].value) {
          player.addStackToDeck(this.stack);
        } else {
            if(this.currentPlayer === player) {
                // Current player is the player who incorrectly called Snap
                this.currentPlayer.next.addCardToDeck(player.cards.pop());
            } else {
                // Current player is NOT the player who incorrectly called Snap
                this.currentPlayer.addCardToDeck(player.cards.pop());
            }
        }
        // Reset the stack to nothing
        this.stack = [];
    }
};
