/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (0) Dispel; Silence a minion.

var Dispel524 = {

    getDescription: function() {
        return this.formatDescription('Silence a minion.');
    },

    targetLocations: 'allBattlefields',

    cast: function(target) {
        target.silence();
    }

};



exports.Dispel524 = Dispel524;
