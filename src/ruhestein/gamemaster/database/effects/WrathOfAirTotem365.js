/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var WrathOfAirTotem365 = {

    getDescription: function() {
        return this.formatDescription('Spell Power +1');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "WrathOfAirTotem365"');
    },

};



exports.WrathOfAirTotem365 = WrathOfAirTotem365;
