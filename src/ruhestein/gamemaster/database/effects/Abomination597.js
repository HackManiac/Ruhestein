/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (5) 4/4 Abomination; Taunt. Deathrattle: Deal 2 damage to ALL characters.

var Abomination597 = {

    getDescription: function() {
        return this.formatDescription('Taunt. Deathrattle: Deal 2 damage to ALL characters.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Abomination597"');
    },

};



exports.Abomination597 = Abomination597;
