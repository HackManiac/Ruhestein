/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 1/4 Demolisher; At the start of your turn, deal 2 damage to a random enemy.

var Demolisher212 = {

    getDescription: function() {
        return this.formatDescription('At the start of your turn, deal 2 damage to a random enemy.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Demolisher212"');
    },

};



exports.Demolisher212 = Demolisher212;
