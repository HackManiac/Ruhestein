/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



var StormwindChampion310 = {

    getDescription: function() {
        return this.formatDescription('Your other minions have +1/+1.');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "StormwindChampion310"');
    },

};



exports.StormwindChampion310 = StormwindChampion310;
