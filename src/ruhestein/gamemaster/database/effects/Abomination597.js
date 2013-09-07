/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Abomination597 = {

    getDescription: function() {
        return this.formatDescription('Taunt. Deathrattle: Deal 2 damage to ALL characters.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Abomination597"');
    },

};



exports.Abomination597 = Abomination597;
