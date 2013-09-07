/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 3/3 Southsea Captain; Your other Pirates have +1/+1.

var SouthseaCaptain324 = {

    getDescription: function() {
        return this.formatDescription('Your other Pirates have +1/+1.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "SouthseaCaptain324"');
    },

};



exports.SouthseaCaptain324 = SouthseaCaptain324;
