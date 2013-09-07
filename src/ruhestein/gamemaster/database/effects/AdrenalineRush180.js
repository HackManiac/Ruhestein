/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Adrenaline Rush; Draw a card. Combo: Draw 2 cards instead.

var AdrenalineRush180 = {

    getDescription: function() {
        return this.formatDescription('Draw a card. Combo: Draw 2 cards instead.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "AdrenalineRush180"');
    },

};



exports.AdrenalineRush180 = AdrenalineRush180;
