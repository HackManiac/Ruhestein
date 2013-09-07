/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (0) Moonfire; Deal 1 damage.

var Moonfire619 = {

    getDescription: function() {
        return this.formatDescription('Deal 1 damage.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Moonfire619"');
    },

};



exports.Moonfire619 = Moonfire619;
