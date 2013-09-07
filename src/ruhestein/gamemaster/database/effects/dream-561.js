/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (0) Dream; Return a minion to its owner's hand.

var Dream561 = {

    getDescription: function() {
        return this.formatDescription('Return a minion to its owner\'s hand.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Dream561"');
    },

};



exports.Dream561 = Dream561;
