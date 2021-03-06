/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (5) 5/5 Captain Greenskin; Whenever you attack with your hero, draw a card.

var CaptainGreenskin267 = {

    getDescription: function() {
        return this.formatDescription('Whenever you attack with your hero, draw a card.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "CaptainGreenskin267"');
    },

};



exports.CaptainGreenskin267 = CaptainGreenskin267;
