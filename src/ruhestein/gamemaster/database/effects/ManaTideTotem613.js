/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var ManaTideTotem613 = {

    getDescription: function() {
        return this.formatDescription('At the end of your turn, draw a card.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ManaTideTotem613"');
    },

};



exports.ManaTideTotem613 = ManaTideTotem613;
