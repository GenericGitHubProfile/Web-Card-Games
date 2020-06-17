Phone Card Games
=================================
Primary features to be implemented
---------------------------------
> CORE
- allow users to select a game to play

>PRIMARY
- users are then taken to a game configuration screen
- users can edit things about the game to be played
- users submit config and are taken to a session with a unique session key on the screen (somewhere)
- other users can type in the session key in the join session field (somewhere on page)
- game selected can start first round when host chooses
- if more players join during a round, they will be added to active player session at start of next round
- to clarify, users are added as active players at the start of rounds

Games to be implemented
------------------------------
- Poohead (version 1)

>Poohead ideas
- array for deck of cards
- initial deal
- deals 3 cards to every player, these are put into a specific FACE DOWN array within their hand array
- deals 3 more to every player, put into specific FACE UP array within hand array
- face down only accessable when face up and hand are empty
- face up ony accessable when hand are empty
- all cards from this array are now only dealt into normal hand array
- when deck is empty, take all but the last played card from the played array
- put them back into the deck array so they can be redistributed properly

> Poohead AI ideas
- Check the current card on the deck, and the cards in "hand"
- Output a state based on this (an integer)
- switch case for action to be taken
- EXTENSION: Allow adding to multiplayer game, after that is implemented?
