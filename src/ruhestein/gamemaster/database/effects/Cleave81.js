/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Cleave81 = {

    getDescription: function() {
        return this.formatDescription('Deal 2 damage to two random enemy minions.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Cleave81"');
    },

};



exports.Cleave81 = Cleave81;
