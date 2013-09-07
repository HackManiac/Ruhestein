/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var NobleSacrifice158 = {

    getDescription: function() {
        return this.formatDescription('Secret: When an enemy attacks, summon a 2/1 Defender as the new target.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "NobleSacrifice158"');
    },

};



exports.NobleSacrifice158 = NobleSacrifice158;
