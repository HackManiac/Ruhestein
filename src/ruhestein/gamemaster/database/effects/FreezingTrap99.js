/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var FreezingTrap99 = {

    getDescription: function() {
        return this.formatDescription('Secret: When an enemy minion attacks, return it to its owner\'s hand and it costs (2) more.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "FreezingTrap99"');
    },

};



exports.FreezingTrap99 = FreezingTrap99;
