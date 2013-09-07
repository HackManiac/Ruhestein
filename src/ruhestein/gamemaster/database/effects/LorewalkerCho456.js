/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var LorewalkerCho456 = {

    getDescription: function() {
        return this.formatDescription('Whenever a player casts a spell, put a copy into the other player’s hand.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "LorewalkerCho456"');
    },

};



exports.LorewalkerCho456 = LorewalkerCho456;
