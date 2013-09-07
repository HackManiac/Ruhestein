/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (2) 4/3 Succubus; Battlecry: Discard a random card.

var Succubus208 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Discard a random card.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Succubus208"');
    },

};



exports.Succubus208 = Succubus208;