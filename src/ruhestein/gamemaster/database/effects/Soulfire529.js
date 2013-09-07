/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Soulfire529 = {

    getDescription: function() {
        return this.formatDescription('Deal 4 damage. Discard a random card.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Soulfire529"');
    },

};



exports.Soulfire529 = Soulfire529;
