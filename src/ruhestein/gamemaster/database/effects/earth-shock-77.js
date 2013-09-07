/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Earth Shock; Silence a minion, then deal 1 damage to it.

var EarthShock77 = {

    getDescription: function() {
        return this.formatDescription('Silence a minion, then deal 1 damage to it.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "EarthShock77"');
    },

};



exports.EarthShock77 = EarthShock77;
