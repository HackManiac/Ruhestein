/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var ManaAddict67 = {

    getDescription: function() {
        return this.formatDescription('Whenever you cast a spell, gain +2 Attack this turn.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ManaAddict67"');
    },

};



exports.ManaAddict67 = ManaAddict67;
