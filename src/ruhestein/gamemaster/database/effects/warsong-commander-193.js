/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 2/3 Warsong Commander; Your other minions have Charge.

var WarsongCommander193 = {

    getDescription: function() {
        return this.formatDescription('Your other minions have Charge.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "WarsongCommander193"');
    },

};



exports.WarsongCommander193 = WarsongCommander193;
