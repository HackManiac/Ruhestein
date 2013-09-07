/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (5) 4/4 Azure Drake; Spell Power +1. Battlecry: Draw a card.

var AzureDrake280 = {

    getDescription: function() {
        return this.formatDescription('Spell Power +1. Battlecry: Draw a card.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "AzureDrake280"');
    },

};



exports.AzureDrake280 = AzureDrake280;
