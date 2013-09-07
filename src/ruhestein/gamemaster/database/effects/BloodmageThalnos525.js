/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 1/1 Bloodmage Thalnos; Spell Power +1. Deathrattle: Draw a card.

var BloodmageThalnos525 = {

    getDescription: function() {
        return this.formatDescription('Spell Power +1. Deathrattle: Draw a card.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "BloodmageThalnos525"');
    },

};



exports.BloodmageThalnos525 = BloodmageThalnos525;
