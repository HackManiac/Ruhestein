/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var BaneOfDoom670 = {

    getDescription: function() {
        return this.formatDescription('Deal 2 damage to a character.  If that kills it, summon a random Demon.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "BaneOfDoom670"');
    },

};



exports.BaneOfDoom670 = BaneOfDoom670;
