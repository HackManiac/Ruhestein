/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Barrel Toss; Deal 2 damage.

var BarrelToss606 = {

    getDescription: function() {
        return this.formatDescription('Deal 2 damage.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "BarrelToss606"');
    },

};



exports.BarrelToss606 = BarrelToss606;
