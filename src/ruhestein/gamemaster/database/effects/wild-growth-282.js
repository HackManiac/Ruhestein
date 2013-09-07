/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (2) Wild Growth; Gain an empty Mana Crystal.

var WildGrowth282 = {

    getDescription: function() {
        return this.formatDescription('Gain an empty Mana Crystal.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "WildGrowth282"');
    },

};



exports.WildGrowth282 = WildGrowth282;
