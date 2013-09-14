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
        this.castWindfury();
    }

};



exports.WindfuryHarpy675 = WindfuryHarpy675;
