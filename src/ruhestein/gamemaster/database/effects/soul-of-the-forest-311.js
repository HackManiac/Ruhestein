/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (4) Soul of the Forest; Give your minions "Deathrattle: Summon a 2/2 Treant."

var SoulOfTheForest311 = {

    getDescription: function() {
        return this.formatDescription('Give your minions "Deathrattle: Summon a 2/2 Treant."');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "SoulOfTheForest311"');
    },

};



exports.SoulOfTheForest311 = SoulOfTheForest311;
