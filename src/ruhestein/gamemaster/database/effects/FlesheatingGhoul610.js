/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var FlesheatingGhoul610 = {

    getDescription: function() {
        return this.formatDescription('Whenever a minion dies, gain +1 Attack.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "FlesheatingGhoul610"');
    },

};



exports.FlesheatingGhoul610 = FlesheatingGhoul610;
