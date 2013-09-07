/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (4) Swipe; Deal 4 damage to an enemy and 1 damage to all other enemies.

var Swipe620 = {

    getDescription: function() {
        return this.formatDescription('Deal 4 damage to an enemy and 1 damage to all other enemies.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Swipe620"');
    },

};



exports.Swipe620 = Swipe620;
