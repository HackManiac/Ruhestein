/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (3) 3/3 Shattered Sun Cleric; Battlecry: Give a friendly minion +1/+1.

var ShatteredSunCleric434 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Give a friendly minion +1/+1.');
    },

    targetLocations: 'battlefield',

    castBattlecry: function(target) {
        this.castBuff(target);
    },

    castBuff: function(target) {
        target.modifyAttackAndHealth(1, 1);
    }

};



exports.ShatteredSunCleric434 = ShatteredSunCleric434;
