/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var CaptainsParrot559 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Put a random Pirate from your deck into your hand.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "CaptainsParrot559"');
    },

};



exports.CaptainsParrot559 = CaptainsParrot559;
