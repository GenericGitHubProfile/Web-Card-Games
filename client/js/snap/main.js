'use strict';
import { Card } from '../common/card.mjs';
import { Deck } from '../common/cardDeck.mjs';
import { SnapHand } from './snapHand.mjs';
import { SnapGame } from './snapGame.mjs';

let startGame = document.getElementById('start');
startGame.addEventListener('click', (e) => {
    // Create and Initiate SNAP_GAME object
    // This will handle and manage all functions relating to playing Snap
    const SNAP_GAME = new SnapGame();
    try {
        SNAP_GAME.gameStart(document.getElementById('noPlayers').value);
    } catch (e) {
        console.log(e);
        alert("Game start failed");
        return;
    }
    gameLoop(SNAP_GAME);
});

/*
* Will play until the Game ends
* occurs when either a player wins, there is one or less players left in the lobby
*/
async function gameLoop(GAME) {

}
