/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 5/5 King Mukla; Battlecry: Give your opponent 2 Bananas.

var KingMukla373 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Give your opponent 2 Bananas.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "KingMukla373"');
    },

};



exports.KingMukla373 = KingMukla373;
