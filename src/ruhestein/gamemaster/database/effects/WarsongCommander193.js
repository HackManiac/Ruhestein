/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var WarsongCommander193 = {

    getDescription: function() {
        return this.formatDescription('Your other minions have Charge.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "WarsongCommander193"');
    },

};



exports.WarsongCommander193 = WarsongCommander193;
