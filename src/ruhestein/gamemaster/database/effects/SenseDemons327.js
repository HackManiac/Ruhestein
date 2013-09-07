/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (3) Sense Demons; Put 2 random Demons from your deck into your hand.

var SenseDemons327 = {

    getDescription: function() {
        return this.formatDescription('Put 2 random Demons from your deck into your hand.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "SenseDemons327"');
    },

};



exports.SenseDemons327 = SenseDemons327;
