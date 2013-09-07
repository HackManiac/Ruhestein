/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var ArcaneIntellect489 = {

    getDescription: function() {
        return this.formatDescription('Draw 2 cards.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ArcaneIntellect489"');
    },

};



exports.ArcaneIntellect489 = ArcaneIntellect489;
