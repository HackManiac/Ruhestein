/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var SnakeTrap210 = {

    getDescription: function() {
        return this.formatDescription('Secret: When one of your minions is attacked, summon three 1/1 Snakes.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "SnakeTrap210"');
    },

};



exports.SnakeTrap210 = SnakeTrap210;
