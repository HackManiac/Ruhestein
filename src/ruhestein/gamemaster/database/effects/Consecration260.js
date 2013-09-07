/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Consecration260 = {

    getDescription: function() {
        return this.formatDescription('Deal 2 damage to all enemies.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Consecration260"');
    },

};



exports.Consecration260 = Consecration260;
