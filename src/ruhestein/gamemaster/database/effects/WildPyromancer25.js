/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 3/2 Wild Pyromancer; After you cast a spell, deal 1 damage to ALL minions.

var WildPyromancer25 = {

    getDescription: function() {
        return this.formatDescription('After you cast a spell, deal 1 damage to ALL minions.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "WildPyromancer25"');
    },

};



exports.WildPyromancer25 = WildPyromancer25;
