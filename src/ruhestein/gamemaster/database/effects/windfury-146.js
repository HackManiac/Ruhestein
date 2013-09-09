/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (2) Windfury; Give a minion Windfury.

var Windfury146 = {

    getDescription: function() {
        return this.formatDescription('Give a minion Windfury.');
    },

    targetLocations: 'allBattlefields',

    cast: function(target) {
        target.setHasWindfury(true);
    },

};



exports.Windfury146 = Windfury146;
