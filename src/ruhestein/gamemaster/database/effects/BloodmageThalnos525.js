/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var BloodmageThalnos525 = {

    getDescription: function() {
        return this.formatDescription('Spell Power +1. Deathrattle: Draw a card.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "BloodmageThalnos525"');
    },

};



exports.BloodmageThalnos525 = BloodmageThalnos525;
