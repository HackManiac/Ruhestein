/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (7) 7/5 Baron Geddon; At the end of your turn, deal 2 damage to ALL other characters.

var BaronGeddon539 = {

    getDescription: function() {
        return this.formatDescription('At the end of your turn, deal 2 damage to ALL other characters.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "BaronGeddon539"');
    },

};



exports.BaronGeddon539 = BaronGeddon539;
