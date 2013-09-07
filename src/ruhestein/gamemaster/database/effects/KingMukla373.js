/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var KingMukla373 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Give your opponent 2 Bananas.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "KingMukla373"');
    },

};



exports.KingMukla373 = KingMukla373;
