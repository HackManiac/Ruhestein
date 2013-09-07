/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (2) Eviscerate; Deal 2 damage. Combo: Deal 4 damage instead.

var Eviscerate382 = {

    getDescription: function() {
        return this.formatDescription('Deal 2 damage. Combo: Deal 4 damage instead.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Eviscerate382"');
    },

};



exports.Eviscerate382 = Eviscerate382;
