/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var SpiritWolf451 = {

    getDescription: function() {
        return this.formatDescription('Taunt');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "SpiritWolf451"');
    },

};



exports.SpiritWolf451 = SpiritWolf451;
