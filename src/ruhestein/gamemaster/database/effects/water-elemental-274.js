/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (4) 3/6 Water Elemental; Freeze any character that Water Elemental damages.

var WaterElemental274 = {

    getDescription: function() {
        return this.formatDescription('Freeze any character that Water Elemental damages.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "WaterElemental274"');
    },

};



exports.WaterElemental274 = WaterElemental274;
