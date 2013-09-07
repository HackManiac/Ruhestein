/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var RazorfenHunter47 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Summon a 1/1 Boar.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "RazorfenHunter47"');
    },

};



exports.RazorfenHunter47 = RazorfenHunter47;
