/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Mind Vision; Put a copy of a random card in your opponent's hand into your hand.

var MindVision438 = {

    getDescription: function() {
        return this.formatDescription('Put a copy of a random card in your opponent\'s hand into your hand.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "MindVision438"');
    },

};



exports.MindVision438 = MindVision438;
