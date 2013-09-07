/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var DreadInfernal36 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Deal 1 damage to ALL other characters.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "DreadInfernal36"');
    },

};



exports.DreadInfernal36 = DreadInfernal36;
