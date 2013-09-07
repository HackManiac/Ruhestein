/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (8) Lay on Hands; Restore #8 Health. Draw 3 cards.

var LayOnHands506 = {

    getDescription: function() {
        return this.formatDescription('Restore #8 Health. Draw 3 cards.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "LayOnHands506"');
    },

};



exports.LayOnHands506 = LayOnHands506;
