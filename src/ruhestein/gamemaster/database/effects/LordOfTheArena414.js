/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var LordOfTheArena414 = {

    getDescription: function() {
        return this.formatDescription('Taunt');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "LordOfTheArena414"');
    },

};



exports.LordOfTheArena414 = LordOfTheArena414;
