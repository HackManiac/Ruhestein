/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (3) Hex; Transform a minion into a 0/1 Frog with Taunt.

var Hex270 = {

    getDescription: function() {
        return this.formatDescription('Transform a minion into a 0/1 Frog with Taunt.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Hex270"');
    },

};



exports.Hex270 = Hex270;
