/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Whirlwind161 = {

    getDescription: function() {
        return this.formatDescription('Deal 1 damage to ALL minions.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Whirlwind161"');
    },

};



exports.Whirlwind161 = Whirlwind161;
