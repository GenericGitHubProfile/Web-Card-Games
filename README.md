Phone Card Games
=================================
- Before any serverside development, simple local game must be playable

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

>Poohead rules
- only play cards higher than one on top of stack
- Ace's are high
- can play special cards at any time
- 2's reset the stack down to 2
- 7's allow a user to decide if ONLY the next card is higher or lower
- 10's remove the cards from the game, until the end of the round
- Four of the same card value in a row acts as a 10

- Version 2

> Poohead AI ideas
- Check the current card on the deck, and the cards in "hand"
- Output a state based on this (an integer)
- switch case for action to be taken
- EXTENSION: Allow adding to multiplayer game, after that is implemented?

- 52 Card Pickup (version 1)

>52 Card Pickup ideas
- creates a deck, then randomly spreads the cards across the page
- players drag and drop the cards back in to the centre, pressing R when they have a card selected to flip it
- Players are scored on time taken and order of the list
