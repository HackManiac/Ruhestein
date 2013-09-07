/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Sinister Strike; Deal 3 damage to the enemy hero.

var SinisterStrike205 = {

    getDescription: function() {
        return this.formatDescription('Deal 3 damage to the enemy hero.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "SinisterStrike205"');
    },

};



exports.SinisterStrike205 = SinisterStrike205;
