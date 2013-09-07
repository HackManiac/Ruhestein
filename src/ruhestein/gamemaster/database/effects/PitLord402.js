/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (4) 7/5 Pit Lord; Battlecry: Deal 7 damage to your hero.

var PitLord402 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Deal 7 damage to your hero.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "PitLord402"');
    },

};



exports.PitLord402 = PitLord402;
