/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var MultiShot407 = {

    getDescription: function() {
        return this.formatDescription('Deal 3 damage to two random enemy minions.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "MultiShot407"');
    },

};



exports.MultiShot407 = MultiShot407;
