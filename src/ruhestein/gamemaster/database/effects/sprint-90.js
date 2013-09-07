/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (7) Sprint; Draw 4 cards.

var Sprint90 = {

    getDescription: function() {
        return this.formatDescription('Draw 4 cards.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Sprint90"');
    },

};



exports.Sprint90 = Sprint90;
