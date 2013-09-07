/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (4) 2/4 Gnomish Inventor; Battlecry: Draw a card.

var GnomishInventor246 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Draw a card.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "GnomishInventor246"');
    },

};



exports.GnomishInventor246 = GnomishInventor246;
