/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (5) Nourish; Choose One - Gain 2 Mana Crystals; or Draw 3 cards.

var Nourish120 = {

    getDescription: function() {
        return this.formatDescription('Choose One - Gain 2 Mana Crystals; or Draw 3 cards.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Nourish120"');
    },

};



exports.Nourish120 = Nourish120;
