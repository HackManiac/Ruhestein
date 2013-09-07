/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var WaterElemental274 = {

    getDescription: function() {
        return this.formatDescription('Freeze any character that Water Elemental damages.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "WaterElemental274"');
    },

};



exports.WaterElemental274 = WaterElemental274;
