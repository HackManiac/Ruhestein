/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (5) 5/7 Doomguard; Charge. Battlecry: Discard two random cards.

var Doomguard507 = {

    getDescription: function() {
        return this.formatDescription('Charge. Battlecry: Discard two random cards.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "Doomguard507"');
    },

};



exports.Doomguard507 = Doomguard507;
