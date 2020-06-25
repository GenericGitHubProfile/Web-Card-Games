'use strict';
import { Card } from '../common/card.mjs';
import { Deck } from '../common/cardDeck.mjs';
import { SnapHand } from './snapHand.mjs';
import { SnapGame } from './snapGame.mjs';

let startGame = document.getElementById('start');
startGame.addEventListener('click', (e) => {
    // DO things
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

async function gameLoop(GAME) {

}
