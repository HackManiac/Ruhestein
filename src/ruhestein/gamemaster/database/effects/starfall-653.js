/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (0) Starfall; Deal 2 damage to all enemies.

var Starfall653 = {

    getDescription: function() {
        return this.formatDescription('Deal 2 damage to all enemies.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Starfall653"');
    },

};



exports.Starfall653 = Starfall653;
