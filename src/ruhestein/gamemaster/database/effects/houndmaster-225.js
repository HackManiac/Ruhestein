/**
 * @license
 * Ruhestein - A Hearthstone game mechanics simulator
 */
'use strict';



// From minion card: (4) 4/3 Houndmaster; Battlecry: Give a friendly Beast +2/+2 and Taunt.

var Houndmaster225 = {

    getDescription: function() {
        return this.formatDescription('Battlecry: Give a friendly Beast +2/+2 and Taunt.');
    },

    targetLocations: 'battlefield',

    targetFilter: function(card) {
        return card.isBeast();
    },

    castBattlecry: function(target) {
        this.buffCard(target);
    },

    castBuff: function(target) {
        target.modifyAttackAndHealth(2, 2);
        target.setHasTaunt(true);
    }

};



exports.Houndmaster225 = Houndmaster225;
