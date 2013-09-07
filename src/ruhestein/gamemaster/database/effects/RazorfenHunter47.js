/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 2/3 Razorfen Hunter; Battlecry: Summon a 1/1 Boar.

var RazorfenHunter47 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Summon a 1/1 Boar.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "RazorfenHunter47"');
    },

};



exports.RazorfenHunter47 = RazorfenHunter47;
