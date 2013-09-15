# Ruhestein

*A Hearthstone game mechanics simulator written in JavaScript.*

TBD


You can find the code here TBD.
You can see the result of the test suite here TBD.
You can play a game on the server here TBD.


## Current State

The following aspects are implemented and have corresponding tests to ensure that they are working correctly:

- hooks and helpers for all basis game mechanics (Battlecry, Charge, Choose One, Combo, Deathrattle, Divine Shield, Enrage, Freeze, Overload, Secret, Silence, Spell Power, Stealth, Summon, Taunt, Transform, Windfury)
- all nine hero powers
- all cards of the nine basic decks
- some other cards that were needed for simulated games



## Architecture

The source is currently grouped into four areas:


### Common

Source: `src/ruhestein/common/...`
Tests: `test/spec/ruhestein-test/common/...`

Contains functionality that is shared between multiple parts of the library.


### GameMaster

Source: `src/ruhestein/gamemaster/...`
Tests: `test/spec/ruhestein-test/gamemaster/...`

This is where most of the game mechanics logic and the card database is located. GameMaster components have full access to games, players, cards, effects, buffs and so on. In a conventional client-server environment this code would live on the server side.

It also contains a `Connector` that makes it easy to keep a GameClient variant of a game in sync with the GameMaster one.



### GameClient

Source: `src/ruhestein/gameclient/...`
Tests: `test/spec/ruhestein-test/gameclient/...`

The GameClient components are basically a stripped-down, read-only variant of some of the GameMaster components. You can perform actions on those components which will be forwarded to the GameMaster component by the `Connector`. In exchange changes to the GameMaster component's property are propagated back to the GameClient component.

In a conventional client-server environment this code would live on the client-side (and optionally on the server to ease the synchronization).



### GameSimulation

Source: `src/ruhestein/gamesimulation/...`
Tests: `test/spec/ruhestein-test/gamesimulation/...`

The GameSimulation combines GameMaster and GameClient components into a single object. With its helper methods to disable randomness and predict dice rolls it is most suited to simulate games.



## Getting it yourself

### Prerequisites

- node
- grunt
- 

### Preparation

	$ hg clone ....
	$ npm install
	$ bower install


### Running the test suite

	$ grunt test

Or if you prefer to run the tests in a browser

	$ grunt test open watch


### Running the game server

	$ node bin/start-server.js


### 

## Contributing

You can contribute in many different ways.


### Implementing card effects

The directory `src/ruhestein/gamemaster/database/effects` contains auto-generated skeleton files for each card effect in the game. In addition to that the directory `test/spec/ruhestein-test/gamesimulation/effects` contains auto-generated skeleton files for the corresponding unit tests.

If you need a card effect that has not yet been implemented you can do so yourself:

- Find the corresponding files in the two directories mentioned above.
- Change the `xit` to `it` to make the currently pending test active.
- Implement the test using the game test engine object `g`.
- Implement the card effect.
- Make sure that the test runs as expected.

Below you can find some help implementing card effects using the hooks and helper methods for the basic game mechanics:


#### Battlecry

Example: `src/ruhestein/gamemaster/database/effects/silver-hand-knight-648.js`

Implement a `castBattlecry` method in the effect. It will be called automatically when a minion card is played from the hand to the battlefield.


#### Charge

Example: `src/ruhestein/gamemaster/database/effects/stonetusk-boar-76.js`

Call the `castCharge` helper in the `cast` method of the effect. It will flag the minion as having Charge and will unsleep it if necessary.


#### Choose One

Example: `src/ruhestein/gamemaster/database/effects/mark-of-nature-149.js`

All 'Choose One' effects need a `chooseOne` property that contains an array with two objects describing the possible choices. Each of those objects must contain a `filter` and a `target` property. The `filter` property refers to one of the entries in the effect's `cardFilters` property. The `target` property describes which type of target the choice needs (valid values are `'none'`, `'self'` and `'target'`).

Take the example effect from the file above. It has a `chooseOne` property with the following value:

	chooseOne: [{
	    filter: 'chooseOneA',
	    target: 'target',
	}, {
	    filter: 'chooseOneB',
	    target: 'target'
	}]

If 'Mark of Nature' is played you must specify which of the choices shall be played. If for example the first choice was taken a card named `chooseOneA` would be created using the `createNamedCard` helper method (which in turn uses the `cardFilters` object to find an appropriate filter) and played with the same target as the original 'Mark of Nature'.


#### Combo

Example: TBD

The `info` object that is passed into the effect's `cast` method contains a property `combo` that is true if this is not the first card played this turn.



#### Deathrattle

Example: `src/ruhestein/gamemaster/database/effects/loot-hoarder-395.js`

Implement a `castDeathrattle` method in the effect. It will be called automatically when this minion card dies.



#### Divine Shield

Example: `src/ruhestein/gamemaster/database/effects/argent-squire-473.js`

Call the `castDivineShield` helper in the `cast` method of the effect. It will flag the minion as having a Divine Shield.



#### Enrage

Example: `src/ruhestein/gamemaster/database/effects/tauren-warrior-477.js`

Implement two methods `castEnrage` and `uncastEnrage`. They will be called automatically when a previously undamaged minion takes damage and when it is healed back up to maximum health respectively.

To ease the implementation of those your `(un)?castEnrage` method can use the self buff stack helper methods like in the example above.



#### Freeze

Example: `src/ruhestein/gamemaster/database/effects/frostbolt-177.js`

Call `targetCard.setIsFrozen(true)` on a card to freeze it. It will be automatically unfrozen at the end of the next turn of it's owner.



#### Overload

Example: TBD

TBD



#### Secret

Example: `src/ruhestein/gamemaster/database/effects/noble-sacrifice-158.js`

Implement two methods `castSecret` and `triggerSecret`. `castSecret` will be automatically called when the card is played and should setup the event listening needed to later trigger the secret.

When the conditions for the secret are met, call `this.getCard().triggerSecret()` which in turn will call the `triggerSecret` method of the effect. After that the secret will be automatically discarded.



#### Silence

Example: `src/ruhestein/gamemaster/database/effects/ironbeak-owl-500.js`

Call `targetCard.silence()` on a card to silence it.



#### Spell Power

Example: `src/ruhestein/gamemaster/database/effects/wrath-of-air-totem-365.js`

TBD


#### Stealth

Example: `src/ruhestein/gamemaster/database/effects/worgen-infiltrator-112.js`

Call the `castStealth` helper in the `cast` method of the effect. It will flag the minion to be stealthed.



#### Summon

Example: `src/ruhestein/gamemaster/database/effects/reinforce-248.js`

This is a two step process. First you need to create the card to be summoned. One of the ways (also used in the example) is the `createNamedCard` helper.

Once you have the card to summon just call the `summonCard` helper to summon it.



#### Taunt

Example: `src/ruhestein/gamemaster/database/effects/booty-bay-bodyguard-27.js`

Call the `castTaunt` helper during the `cast` method of the effect. It will flag the minion to be a taunter.



#### Transform

Example: `src/ruhestein/gamemaster/database/effects/hex-270.js`

Like with the 'Summon' mechanics above you need to create the card to transform to first.

Once you have the card just call `oldCard.transformTo(newCard)` on the original card.



#### Windfury

Example: `src/ruhestein/gamemaster/database/effects/windfury-harpy-675.js`

Call the `castWindfury` helper during the `cast` method of the effect. This will flags the minion to have Windfury and to be able to attack twice per turn.



## FAQ

- **Where does the name come from?**

	It's WoW's german localization for the Hearthstone item.


- **Is Blizzard okay with this project using their IP?**

	Well, I tried to contact them several times but did not get any reply back. That either means that they were to busy to aswer or that they don't mind. In case they do mind I will be contacted nevertheless :)



## Credits and Legal Notes

Hearthstone is a trademark, and Warcraft, Battle.net and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc.  in the U.S., and/or other countries. All other trademarks referenced herein are the properties of their respective owners.
