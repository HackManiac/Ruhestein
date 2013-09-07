/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var LeperGnome513 = {

    getDescription: function() {
        return this.formatDescription('Deathrattle: Deal 2 damage to the enemy hero.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "LeperGnome513"');
    },

};



exports.LeperGnome513 = LeperGnome513;
