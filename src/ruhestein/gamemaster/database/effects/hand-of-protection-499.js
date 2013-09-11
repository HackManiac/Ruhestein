/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (1) Hand of Protection; Give a minion Divine Shield.

var HandOfProtection499 = {

    getDescription: function() {
        return this.formatDescription('Give a minion Divine Shield.');
    },

    targetLocations: 'allBattlefields',

    cast: function(target) {
        target.setHasDivineShield(true);
    }

};



exports.HandOfProtection499 = HandOfProtection499;
