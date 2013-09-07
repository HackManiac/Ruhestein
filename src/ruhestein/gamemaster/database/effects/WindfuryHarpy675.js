/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (6) 4/5 Windfury Harpy; Windfury

var WindfuryHarpy675 = {

    getDescription: function() {
        return this.formatDescription('Windfury');
    },

    cast: function() {
        throw new Error('No cast implementation for effect "WindfuryHarpy675"');
    },

};



exports.WindfuryHarpy675 = WindfuryHarpy675;
