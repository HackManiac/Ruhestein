/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var NatPagle19 = {

    getDescription: function() {
        return this.formatDescription('At the end of your turn, you have a 50% chance to draw a card.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "NatPagle19"');
    },

};



exports.NatPagle19 = NatPagle19;
