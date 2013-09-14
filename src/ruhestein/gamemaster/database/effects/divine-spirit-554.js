/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (2) Divine Spirit; Double a minion's Health.

var DivineSpirit554 = {

    getDescription: function() {
        return this.formatDescription('Double a minion\'s Health.');
    },

    targetLocations: 'allBattlefields',

    cast: function(target) {
        this.buffCard(target);
    },

    castBuff: function(target) {
        target.modifyMaxHealth(target.getMaxHealth());
        target.modifyDamage(target.getDamage());
    }

};



exports.DivineSpirit554 = DivineSpirit554;
