/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From ability card: (2) Mark of the Wild; Give a minion Taunt and +2/+2. (+2 Attack/+2 Health)

var MarkOfTheWild480 = {

    getDescription: function() {
        return this.formatDescription('Give a minion Taunt and +2/+2. (+2 Attack/+2 Health)');
    },

    targetLocations: 'allBattlefields',

    cast: function(target) {
        this.buffCard(target);
    },

    castBuff: function(target) {
        target.modifyAttackAndHealth(2, 2);
        target.setHasTaunt(true);
    }

};



exports.MarkOfTheWild480 = MarkOfTheWild480;
