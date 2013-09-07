/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (0) The Coin; Gain 1 Mana Crystal this turn only.

var TheCoin141 = {

    getDescription: function() {
        return this.formatDescription('Gain 1 Mana Crystal this turn only.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "TheCoin141"');
    },

};



exports.TheCoin141 = TheCoin141;