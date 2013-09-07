/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (9) 4/12 Ysera; At the end of your turn, draw a Dream Card.

var Ysera495 = {

    getDescription: function() {
        return this.formatDescription('At the end of your turn, draw a Dream Card.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Ysera495"');
    },

};



exports.Ysera495 = Ysera495;
