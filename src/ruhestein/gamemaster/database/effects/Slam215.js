/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (2) Slam; Deal 2 damage to a minion.  If it survives, draw a card.

var Slam215 = {

    getDescription: function() {
        return this.formatDescription('Deal 2 damage to a minion.  If it survives, draw a card.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Slam215"');
    },

};



exports.Slam215 = Slam215;
