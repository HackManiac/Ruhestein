/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (0) Nourish; Draw 3 cards.

var Nourish485 = {

    getDescription: function() {
        return this.formatDescription('Draw 3 cards.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Nourish485"');
    },

};



exports.Nourish485 = Nourish485;
