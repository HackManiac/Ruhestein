/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Thoughtsteal62 = {

    getDescription: function() {
        return this.formatDescription('Copy 2 cards from your opponent\'s deck and put them into your hand.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Thoughtsteal62"');
    },

};



exports.Thoughtsteal62 = Thoughtsteal62;
