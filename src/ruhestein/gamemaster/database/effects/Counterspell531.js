/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Counterspell531 = {

    getDescription: function() {
        return this.formatDescription('Secret: When your opponent casts a spell, Counter it.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Counterspell531"');
    },

};



exports.Counterspell531 = Counterspell531;
