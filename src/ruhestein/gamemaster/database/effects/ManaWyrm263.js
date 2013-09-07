/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var ManaWyrm263 = {

    getDescription: function() {
        return this.formatDescription('Whenever you cast a spell, gain +1 Attack.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ManaWyrm263"');
    },

};



exports.ManaWyrm263 = ManaWyrm263;
