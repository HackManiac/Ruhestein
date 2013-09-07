/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var ColdlightOracle88 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Each player draws 2 cards.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ColdlightOracle88"');
    },

};



exports.ColdlightOracle88 = ColdlightOracle88;
