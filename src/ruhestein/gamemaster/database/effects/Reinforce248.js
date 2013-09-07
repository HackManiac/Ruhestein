/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From heroPower card: (2) Reinforce; Hero Power  Summon a 1/1 Silver Hand Recruit.

var Reinforce248 = {

    getDescription: function() {
        return this.formatDescription('Hero Power  Summon a 1/1 Silver Hand Recruit.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Reinforce248"');
    },

};



exports.Reinforce248 = Reinforce248;
