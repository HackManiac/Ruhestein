/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (7) 6/6 Stormwind Champion; Your other minions have +1/+1.

var StormwindChampion310 = {

    getDescription: function() {
        return this.formatDescription('Your other minions have +1/+1.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "StormwindChampion310"');
    },

};



exports.StormwindChampion310 = StormwindChampion310;
