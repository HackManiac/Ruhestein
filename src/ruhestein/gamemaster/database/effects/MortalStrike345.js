/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var MortalStrike345 = {

    getDescription: function() {
        return this.formatDescription('Deal 4 damage.  If your hero has 12 or less Health, deal 6 damage instead.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "MortalStrike345"');
    },

};



exports.MortalStrike345 = MortalStrike345;
