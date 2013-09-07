/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Frost Shock; Deal 1 damage to an enemy character and Freeze it.

var FrostShock233 = {

    getDescription: function() {
        return this.formatDescription('Deal 1 damage to an enemy character and Freeze it.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "FrostShock233"');
    },

};



exports.FrostShock233 = FrostShock233;
