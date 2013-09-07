/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (6) 3/4 Cabal Shadow Priest; Battlecry: Take control of an enemy minion that has 2 or less Attack.

var CabalShadowPriest147 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Take control of an enemy minion that has 2 or less Attack.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "CabalShadowPriest147"');
    },

};



exports.CabalShadowPriest147 = CabalShadowPriest147;
