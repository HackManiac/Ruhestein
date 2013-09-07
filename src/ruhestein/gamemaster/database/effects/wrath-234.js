/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (0) Wrath; Deal 3 damage.

var Wrath234 = {

    getDescription: function() {
        return this.formatDescription('Deal 3 damage.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Wrath234"');
    },

};



exports.Wrath234 = Wrath234;
