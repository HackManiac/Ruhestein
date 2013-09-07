/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (5) 4/4 Frostwolf Warlord; Has +1/+1 for each other friendly minion on the battlefield.

var FrostwolfWarlord604 = {

    getDescription: function() {
        return this.formatDescription('Has +1/+1 for each other friendly minion on the battlefield.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "FrostwolfWarlord604"');
    },

};



exports.FrostwolfWarlord604 = FrostwolfWarlord604;