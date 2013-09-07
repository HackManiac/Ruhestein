/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var SouthseaCaptain324 = {

    getDescription: function() {
        return this.formatDescription('Your other Pirates have +1/+1.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "SouthseaCaptain324"');
    },

};



exports.SouthseaCaptain324 = SouthseaCaptain324;
