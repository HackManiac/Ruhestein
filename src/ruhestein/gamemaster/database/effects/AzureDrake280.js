/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var AzureDrake280 = {

    getDescription: function() {
        return this.formatDescription('Spell Power +1. Battlecry: Draw a card.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "AzureDrake280"');
    },

};



exports.AzureDrake280 = AzureDrake280;
