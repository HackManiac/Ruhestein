/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var AbusiveSergeant577 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Give a friendly minion +2 Attack this turn.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "AbusiveSergeant577"');
    },

};



exports.AbusiveSergeant577 = AbusiveSergeant577;
