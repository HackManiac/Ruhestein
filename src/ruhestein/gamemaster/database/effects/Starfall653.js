/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Starfall653 = {

    getDescription: function() {
        return this.formatDescription('Deal 2 damage to all enemies.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Starfall653"');
    },

};



exports.Starfall653 = Starfall653;
