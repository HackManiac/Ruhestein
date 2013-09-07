/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (5) Blessed Champion; Double a minion's Attack.

var BlessedChampion7 = {

    getDescription: function() {
        return this.formatDescription('Double a minion\'s Attack.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "BlessedChampion7"');
    },

};



exports.BlessedChampion7 = BlessedChampion7;
