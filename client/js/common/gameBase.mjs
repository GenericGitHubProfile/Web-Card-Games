import { PlayerHand } from './playerHand.mjs';
import { CircularLinkedList } from './linkedList/circularLinkedList.mjs';

export class GameBase {
    constructor(gameName = "") {
        if(!gameName) throw new SyntaxError("Must give game name");
        /*
        * Prelude is from when the game object is created and is when game setup is happening
        * Start is the first moment that a player can take an action
        * In Progress is after the first action until the action that will win the game
        * End deals with wrapping up the game and congratulating users, etc.
        * Post Game is after the players have accepted this and can restart etc.
        */
        this.GAME_STATES = Object.freeze({
            PRELUDE: 'Prelude',
            START: 'Start',
            IN_PROGRESS: 'In Progress',
            END: 'End',
            POST_GAME: 'Post Game'
        });
        this.currentGameState = this.GAME_STATES.PRELUDE;
        this.gameName = gameName;
        this.stack = [];
        this.players = null;
    }

    checkNoPlayers(noPlayers) {
        return ((Number.isNaN(noPlayers) || noPlayers > this.MAX_PLAYERS || noPlayers < this.MIN_PLAYERS) ? false : true);
    }

    setGameState(state) {
        return (!(state.toUpperCase() in this.GAME_STATES) ? false : this.currentGameState = state);
    }

    // addPlayer(hand) {
    //     if(!hand.prototpye instanceof PlayerHand) return false;
    //     this.players.push(hand);
    // }

    /*
    * Must be implemented in sub-classes, will throw an error otherwise
    */
    gameStart() {
      throw new InternalError("Method not implemented in subclass");
    }

    nextPlayer() {

    }
};
