/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (10) 12/12 Deathwing; Battlecry: Destroy all other minions and discard your hand.

var Deathwing474 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Destroy all other minions and discard your hand.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Deathwing474"');
    },

};



exports.Deathwing474 = Deathwing474;
