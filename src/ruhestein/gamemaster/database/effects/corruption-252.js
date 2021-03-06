/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Corruption; Choose an enemy minion.   At the start of your turn, destroy it.

var Corruption252 = {

    getDescription: function() {
        return this.formatDescription('Choose an enemy minion.   At the start of your turn, destroy it.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Corruption252"');
    },

};



exports.Corruption252 = Corruption252;
