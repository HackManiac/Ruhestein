/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var AdrenalineRush180 = {

    getDescription: function() {
        return this.formatDescription('Draw a card. Combo: Draw 2 cards instead.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "AdrenalineRush180"');
    },

};



exports.AdrenalineRush180 = AdrenalineRush180;
