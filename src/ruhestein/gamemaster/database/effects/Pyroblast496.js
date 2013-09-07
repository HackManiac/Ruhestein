/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (8) Pyroblast; Deal 10 damage.

var Pyroblast496 = {

    getDescription: function() {
        return this.formatDescription('Deal 10 damage.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Pyroblast496"');
    },

};



exports.Pyroblast496 = Pyroblast496;
