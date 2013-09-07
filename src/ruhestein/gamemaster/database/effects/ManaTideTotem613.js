/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 0/3 Mana Tide Totem; At the end of your turn, draw a card.

var ManaTideTotem613 = {

    getDescription: function() {
        return this.formatDescription('At the end of your turn, draw a card.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "ManaTideTotem613"');
    },

};



exports.ManaTideTotem613 = ManaTideTotem613;
