/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Nourish485 = {

    getDescription: function() {
        return this.formatDescription('Draw 3 cards.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Nourish485"');
    },

};



exports.Nourish485 = Nourish485;
