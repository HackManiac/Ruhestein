/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Holy Smite; Deal 2 damage.

var HolySmite409 = {

    getDescription: function() {
        return this.formatDescription('Deal 2 damage.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "HolySmite409"');
    },

};



exports.HolySmite409 = HolySmite409;
