'use strict';
import { Card } from '../common/card.mjs';
import { SnapGame } from './snapGame.mjs';

// Setup variable for snap game, will be assigned when game starts
let SNAP_GAME;

let startGame = document.getElementById('start');
startGame.addEventListener('click', (e) => {
    // Create and Initiate SNAP_GAME object
    // This will handle and manage all functions relating to playing Snap
    SNAP_GAME = new SnapGame();
    console.log(SNAP_GAME);
    try {
        SNAP_GAME.gameStart(eval(document.getElementById('noPlayers').value));
    } catch (e) {
        console.log(e);
        alert("Game start failed");
        return;
    }
});

let playCardButton = document.getElementById('playCard');
playCardButton.addEventListener('click', (e) => {
    if(!SNAP_GAME) return;
    switch (SNAP_GAME.currentGameState) {
        case 'START':
        case 'IN_PROGRESS':
            SNAP_GAME.playCard(SNAP_GAME.currentPlayer.data);
            break;
    
        default:
            console.log("cannot play card");
            break;
    }
});

let callSnapButton = document.getElementById('callSnap');
callSnapButton.addEventListener('click', (e) => {
    if(!SNAP_GAME) return;
    switch (SNAP_GAME.currentGameState) {
        case 'START':
            console.log("cannot call Snap before cards are played");
            break;
        case 'IN_PROGRESS':
            SNAP_GAME.callSnap(SNAP_GAME.currentPlayer.data);
            break;
        default:
            console.log("what?");
            break;
    }
});

let checkGameObject = document.getElementById('checkGameObject');
checkGameObject.addEventListener('click', (e) => {
    console.log(SNAP_GAME);
});

let resetDeck = document.getElementById('resetDeck');
resetDeck.addEventListener('click', (e) => {
    if(!SNAP_GAME) return;
    SNAP_GAME.snapDeck.resetDeck();
});