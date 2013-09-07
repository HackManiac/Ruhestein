/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Nourish58 = {

    getDescription: function() {
        return this.formatDescription('Gain 2 Mana Crystals.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Nourish58"');
    },

};



exports.Nourish58 = Nourish58;
