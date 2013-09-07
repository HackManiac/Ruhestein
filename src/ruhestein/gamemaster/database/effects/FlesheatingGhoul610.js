/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 2/3 Flesheating Ghoul; Whenever a minion dies, gain +1 Attack.

var FlesheatingGhoul610 = {

    getDescription: function() {
        return this.formatDescription('Whenever a minion dies, gain +1 Attack.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "FlesheatingGhoul610"');
    },

};



exports.FlesheatingGhoul610 = FlesheatingGhoul610;
