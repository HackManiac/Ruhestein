/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (3) Arcane Intellect; Draw 2 cards.

var ArcaneIntellect489 = {

    getDescription: function() {
        return this.formatDescription('Draw 2 cards.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ArcaneIntellect489"');
    },

};



exports.ArcaneIntellect489 = ArcaneIntellect489;
