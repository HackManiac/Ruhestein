/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 1/2 Captain's Parrot; Battlecry: Put a random Pirate from your deck into your hand.

var CaptainsParrot559 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Put a random Pirate from your deck into your hand.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "CaptainsParrot559"');
    },

};



exports.CaptainsParrot559 = CaptainsParrot559;
