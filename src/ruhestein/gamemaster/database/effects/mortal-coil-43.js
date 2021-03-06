/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Mortal Coil; Deal 1 damage to a minion. If that kills it, draw a card.

var MortalCoil43 = {

    getDescription: function() {
        return this.formatDescription('Deal 1 damage to a minion. If that kills it, draw a card.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "MortalCoil43"');
    },

};



exports.MortalCoil43 = MortalCoil43;
