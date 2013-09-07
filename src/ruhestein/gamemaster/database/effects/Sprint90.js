/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var Sprint90 = {

    getDescription: function() {
        return this.formatDescription('Draw 4 cards.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Sprint90"');
    },

};



exports.Sprint90 = Sprint90;
