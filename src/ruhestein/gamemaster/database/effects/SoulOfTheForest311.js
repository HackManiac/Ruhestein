/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var SoulOfTheForest311 = {

    getDescription: function() {
        return this.formatDescription('Give your minions "Deathrattle: Summon a 2/2 Treant."');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "SoulOfTheForest311"');
    },

};



exports.SoulOfTheForest311 = SoulOfTheForest311;
