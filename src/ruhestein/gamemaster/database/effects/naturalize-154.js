/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Naturalize; Destroy a minion. Your opponent draws 2 cards.

var Naturalize154 = {

    getDescription: function() {
        return this.formatDescription('Destroy a minion. Your opponent draws 2 cards.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Naturalize154"');
    },

};



exports.Naturalize154 = Naturalize154;
