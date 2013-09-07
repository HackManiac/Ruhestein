/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Pyroblast496 = {

    getDescription: function() {
        return this.formatDescription('Deal 10 damage.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Pyroblast496"');
    },

};



exports.Pyroblast496 = Pyroblast496;
