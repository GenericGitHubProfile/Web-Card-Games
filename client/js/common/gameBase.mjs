export class GameBase {
    constructor(gameName = "", noPlayers = 0) {
        if(!gameName) throw new Error("Must give game name");
        this.noPlayers = (checkNoPlayers(noPlayers) ? noPlayers : throw new Error(`Game Requires between ${MIN_PLAYERS} and ${MAX_PLAYERS} players to operate`));
        /*
        * Prelude is from when the game object is created and is when game setup is happening
        * Start is the first moment that a player can take an action
        * In Progress is after the first action until the action that will win the game
        * End deals with wrapping up the game and congratulating users, etc.
        * Post Game is after the players have accepted this and can restart etc.
        */
        const GAME_STATES = Object.freeze({
            PRELUDE: 'Prelude',
            START: 'Start',
            IN_PROGRESS: 'In Progress',
            END: 'End',
            POST_GAME: 'Post Game'
        });
        this.gameName = gameName;
        this.players = [];
    }

    checkNoPlayers(noPlayers) {
        return ((Number.isNaN(noPlayers) || noPlayers >= MAX_PLAYERS || noPlayers <= MIN_PLAYERS) ? false : true);
    }
}
