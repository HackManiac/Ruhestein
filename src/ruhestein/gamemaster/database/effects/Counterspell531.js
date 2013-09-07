/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (3) Counterspell; Secret: When your opponent casts a spell, Counter it.

var Counterspell531 = {

    getDescription: function() {
        return this.formatDescription('Secret: When your opponent casts a spell, Counter it.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Counterspell531"');
    },

};



exports.Counterspell531 = Counterspell531;
