/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From weapon card: (3) 2/2 Perdition's Blade; Battlecry: Deal 1 damage. Combo: Deal 2 instead.

var PerditionsBlade82 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Deal 1 damage. Combo: Deal 2 instead.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "PerditionsBlade82"');
    },

};



exports.PerditionsBlade82 = PerditionsBlade82;
